import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

// import { cn } from "@newyolk/ui"

import { Icons } from "@/components/icons"

// import { siteConfig } from "@/config/site"

const FooterView = (): React.JSX.Element => {
  return (
    <footer className='mx-auto mt-auto border-b border-t bg-background px-8'>
      <div className='mx-auto flex w-full items-center justify-between p-4 sm:flex-row md:gap-2 md:px-0'>
        <div className='flex items-center gap-4'>
          <Link href='/' className='flex items-center space-x-2 p-2'>
            <Icons.logo className='h-6 w-6' />
          </Link>
          <div className='text-sm leading-loose opacity-80'>© 2023 New Yolk</div>
        </div>
        <div className='flex gap-4'>
          <Instagram className='w-4 opacity-80' />
          <Twitter className='w-4 opacity-80' />
          <Facebook className='w-4 opacity-80' />
        </div>
      </div>

      {/* <nav className={cn("flex flex-row items-center justify-center space-x-4 pb-4 lg:space-x-6")}>
        {siteConfig.mainNav?.map(
          (item, index) =>
            item.href != null && (
              <Link
                key={index}
                href={item.href}
                className={cn("text-muted-foreground text-sm font-medium transition-colors hover:text-primary")}
              >
                {item.title}
              </Link>
            )
        )}
      </nav> */}
    </footer>
  )
}

export { FooterView }
