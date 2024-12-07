import type { JSX } from 'react'
import { Fragment } from 'react'
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import type { JsonObject } from 'payload'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from '@/components/richText/nodeFormat'

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<JsonObject>
// | Extract<Page['layout'][0], { blockType: 'cta' }>
// | Extract<Page['layout'][0], { blockType: 'mediaBlock' }>
// | BannerBlockProps
// | CodeBlockProps

type Props = {
  nodes: Array<NodeTypes>
}

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <>
      {nodes.map((node, index): JSX.Element | null => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (node == null) {
          return null
        }

        if (node.type === 'text') {
          let text = <Fragment key={index}>{node.text}</Fragment>
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null
          } else {
            if (node.type === 'list' && node.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item.checked) {
                    item.checked = false
                  }
                }
              }
            }
            return serializeLexical({
              nodes: node.children as Array<NodeTypes>,
            })
          }
        }

        const serializedChildren =
          'children' in node ? serializedChildrenFn(node) : ''

        if (node.type === 'block') {
          const block = node.fields

          const blockType = block.blockType

          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (!block || !blockType) {
            return null
          }

          switch (blockType) {
            // case 'cta':
            //   return <CallToActionBlock key={index} {...block} />
            // case 'mediaBlock':
            //   return (
            //     <MediaBlock
            //       className="col-span-3 col-start-1"
            //       imgClassName="m-0"
            //       key={index}
            //       {...block}
            //       captionClassName="mx-auto max-w-[48rem]"
            //       enableGutter={false}
            //     />
            //   )
            // case 'banner':
            //   return (
            //     <BannerBlock
            //       className="col-start-2 mb-4"
            //       key={index}
            //       {...block}
            //     />
            //   )
            // case 'code':
            //   return (
            //     <CodeBlock className="col-start-2" key={index} {...block} />
            //   )
            default:
              return null
          }
        } else {
          switch (node.type) {
            case 'linebreak': {
              return <br className={'col-start-2'} key={index} />
            }
            case 'paragraph': {
              return (
                <p className={'col-start-2'} key={index}>
                  {serializedChildren}
                </p>
              )
            }
            case 'heading': {
              const Tag = node.tag
              return (
                <Tag className={'col-start-2'} key={index}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'list': {
              const Tag = node.tag
              return (
                <Tag className={'list col-start-2'} key={index}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'listitem': {
              if (node.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? 'true' : 'false'}
                    className={` ${node.checked ? '' : ''}`}
                    key={index}
                    role={'checkbox'}
                    tabIndex={-1}
                    value={node.value}
                  >
                    {serializedChildren}
                  </li>
                )
              } else {
                return (
                  <li key={index} value={node.value}>
                    {serializedChildren}
                  </li>
                )
              }
            }
            case 'quote': {
              return (
                <blockquote className={'col-start-2'} key={index}>
                  {serializedChildren}
                </blockquote>
              )
            }
            // case 'link': {
            //   const fields = node.fields
            //
            //   return (
            //     <CMSLink
            //       key={index}
            //       newTab={Boolean(fields?.newTab)}
            //       reference={fields.doc as any}
            //       type={fields.linkType === 'internal' ? 'reference' : 'custom'}
            //       url={fields.url}
            //     >
            //       {serializedChildren}
            //     </CMSLink>
            //   )
            // }

            default:
              return null
          }
        }
      })}
    </>
  )
}