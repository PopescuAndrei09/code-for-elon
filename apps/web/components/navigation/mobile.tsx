"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage, Button, cn } from "@ssp/ui"
import { getInitials } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

const MobileNavigation = (): React.JSX.Element => {
  const [openNavigation, setOpenNavigation] = React.useState<boolean>(false)
  const [openNotificationCenter, setOpenNotificationCenter] = React.useState<boolean>(false)

  const toggleOpenNavigation = () => {
    setOpenNavigation(!openNavigation)
    if (openNotificationCenter) setOpenNotificationCenter(false)
  }

  return (
    <div className='flex sm:hidden'>
      <div className='flex w-full flex-row items-center justify-between py-4'>
        <Link href='/' className='flex items-center space-x-2 p-2'>
          <Icons.logo />
        </Link>

        <div className='fade-in-1 flex flex-row gap-2'>
          <button onClick={toggleOpenNavigation} className='lg:hidden'>
            <div className='border-n-1/50 relative flex h-8 w-8 items-center justify-center rounded-full border align-middle'>
              <Menu className={`${openNavigation ? "hidden" : "block"} text-gray-600 h-5 w-5`} />
              <X className={`${openNavigation ? "block" : "hidden"} text-gray-600 h-6 w-6`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`${openNavigation ? "absolute left-0 top-32 z-10 h-80 w-full bg-secondary" : "hidden"}`}>
        <div className=' flex gap-4 md:gap-8'>
          <div className={cn(" flex w-full flex-col px-6 pb-6")}>
            {siteConfig.mainNav?.map(
              (item, index) =>
                item.href != null && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "border-b-2 p-4 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-secondary/80 hover:text-primary"
                    )}
                    onClick={() => {
                      toggleOpenNavigation()
                    }}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { MobileNavigation }
