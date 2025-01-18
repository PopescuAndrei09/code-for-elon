"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@ssp/ui"

import { siteConfig } from "@/config/site"
import { Icons } from "../icons"

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname()
  return (
    <nav className={cn("flex w-full justify-between", className)} {...props}>
      <div className='flex items-start justify-start gap-4'>
        {siteConfig.mainNav?.map(
          (item, index) =>
            item.href != null && (
              <Link
                key={index}
                href={item.href}
                className='text-base font-medium text-white transition-colors
              '
              >
                {item.title}
              </Link>
            )
        )}
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
    </nav>
  )
}

export { MainNav }
