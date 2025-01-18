"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@ssp/ui"

import { siteConfig } from "@/config/site"

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname()
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {siteConfig.mainNav?.map(
        (item, index) =>
          item.href != null && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                `text-md p-1 text-gray-500 transition-colors hover:text-primary ${
                  pathName === item.href ? "text-primary" : ""
                }`
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  )
}

export { MainNav }
