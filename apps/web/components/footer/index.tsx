import * as React from "react"
import Link from "next/link"

// import { Facebook, Instagram, Twitter } from "lucide-react"

// import { cn } from "@newyolk/ui"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

// import { siteConfig } from "@/config/site"

const FooterView = (): React.JSX.Element => {
  return (
    <footer className='mx-auto mt-auto  bg-[url("/images/footer.png")] bg-cover bg-bottom py-12 '>
      <div className='container flex w-full flex-col items-start gap-6 rounded-3xl border  p-4 backdrop-blur-lg'>
        <div className='flex w-full gap-4'>
          <Link href='/' className='flex items-center'>
            <Icons.logo />
          </Link>
          <div className='relative w-full'>
            <input
              type='search'
              placeholder='Search for casinos'
              className='inline-flex w-full items-center justify-start gap-2 rounded-full border border-white border-opacity-20 bg-transparent px-10 py-3.5'
            />
            <Icons.search className='absolute left-4 top-4' />
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-between gap-8 sm:items-end lg:flex-row lg:items-end'>
          <div className='grid w-full grid-cols-2 gap-8 justify-self-center lg:w-1/2 lg:grid-cols-4'>
            <div className='flex flex-col items-center gap-4 sm:items-start'>
              <div className=' text-base font-medium text-white'>Categories</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
            </div>
            <div className='flex flex-col items-center gap-4 sm:items-start'>
              <div className=' text-base font-medium text-white'>Categories</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
            </div>
            <div className='flex flex-col items-center gap-4 sm:items-start'>
              <div className=' text-base font-medium text-white'>Categories</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
            </div>
            <div className='flex flex-col items-center gap-4 sm:items-start'>
              <div className=' text-base font-medium text-white'>Categories</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
              <div className='text-sm font-normal text-white text-opacity-70'>Poker</div>
            </div>
          </div>
          <div className='ml-12 flex gap-7'>
            <Link
              href={siteConfig.links.twitter}
              className='text-base font-medium text-white transition-colors
              '
            >
              <Icons.twitter />
            </Link>
            <Link
              href={siteConfig.links.instagram}
              className='text-base font-medium text-white transition-colors
              '
            >
              <Icons.instagram />
            </Link>
            <Link
              href={siteConfig.links.facebook}
              className='text-base font-medium text-white transition-colors
              '
            >
              <Icons.facebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { FooterView }
