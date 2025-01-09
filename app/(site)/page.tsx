import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const imageBoxClassName =
  'w-full h-full w-full relative rounded-3xl overflow-hidden aspect-square min-h-[40vh] lg:min-h-[auto]'

export default function Home() {
  return (
    <div
      className={
        'grid min-h-screen w-screen grid-cols-2 gap-4 p-4 lg:grid-cols-3 lg:grid-rows-2'
      }
    >
      <div
        className={
          'col-span-2 row-start-2 flex flex-col items-start justify-end gap-2 rounded-3xl bg-red-100 p-4 text-left md:flex-row md:items-end md:justify-between md:p-8 lg:row-start-1'
        }
      >
        <div className={'flex flex-col items-start gap-2'}>
          <h1
            className={
              'text-[min(calc((100vw-64px)/5.15),96px)] font-black leading-[.85] md:text-[80.2px] xl:text-[96px]'
            }
          >
            REVIVE 25
          </h1>

          <h2
            className={
              'text-[min(calc((100vw-64px)/6.62),53px)] font-black leading-[1] md:text-[44px] xl:text-[53px]'
            }
          >
            Prayer & Worship
          </h2>

          <h2
            className={
              'text-[min(calc((100vw-64px)/6.7),54px)] font-black leading-[1] md:text-[45px] xl:text-[54px]'
            }
          >
            Signs & Wonders
          </h2>

          <h2
            className={
              'text-[min(calc((100vw-64px)/6),41.3px)] font-black leading-[1] md:text-[41.3px] xl:text-[49.7px]'
            }
          >
            Jan 31st - Feb 2nd
          </h2>
        </div>

        <Button size={'lg'} asChild>
          <a
            href={
              'https://tabernacle-center.churchcenter.com/registrations/events/2701942'
            }
            target={'_blank'}
          >
            Register
          </a>
        </Button>
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
