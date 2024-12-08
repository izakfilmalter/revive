import Image from 'next/image'

import { cn } from '@/lib/utils'

const imageBoxClassName =
  'w-full h-full w-full relative rounded-3xl overflow-hidden aspect-square'

export default function Home() {
  return (
    <div
      className={
        'grid min-h-screen w-screen grid-cols-2 grid-rows-3 gap-4 p-4 lg:grid-cols-3 lg:grid-rows-2'
      }
    >
      <div
        className={
          'col-span-2 row-start-2 flex flex-col items-start gap-2 rounded-3xl bg-red-100 p-8 text-left lg:row-start-1'
        }
      >
        <h1
          className={
            'text-[min(calc((100vw-32px)/5.2),96px)] font-black leading-[.85]'
          }
        >
          REVIVE 25
        </h1>

        <h2
          className={
            'text-[min(calc((100vw-32px)/6.3),53px)] font-black leading-[1]'
          }
        >
          Prayer & Worship
        </h2>

        <h2
          className={
            'text-[min(calc((100vw-32px)/7.1),54px)] font-black leading-[1]'
          }
        >
          Signs & Wonders
        </h2>

        <h2
          className={
            'text-[min(calc((100vw-32px)/7.3),59.5px)] font-black leading-[1]'
          }
        >
          Dec 27th - 29th
        </h2>
      </div>

      <div className={cn(imageBoxClassName, '')}>
        <Image
          src={'/ocean.webp'}
          alt={'building color'}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={cn(imageBoxClassName, '')}>
        <Image
          src={'/building-color.webp'}
          alt={'building color'}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={cn(imageBoxClassName, '')}>
        <Image
          src={'/fire.webp'}
          alt={'building color'}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={cn(imageBoxClassName, '')}>
        <Image
          src={'/freeway.webp'}
          alt={'building color'}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
