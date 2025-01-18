"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import { MainNav } from "./main-nav"

const DesktopNavigation = (): React.JSX.Element => {
  return (
    <div className='hidden w-full flex-col items-start gap-6 rounded-3xl border p-4 sm:flex sm:backdrop-blur-lg'>
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
      <MainNav />
    </div>
  )
}

export { DesktopNavigation }
