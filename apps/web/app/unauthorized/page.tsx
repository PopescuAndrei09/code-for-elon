import * as React from "react"
import type { Metadata } from "next"
import { X } from "lucide-react"

import { siteMetadata } from "@/components/metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Unauthorized`
}

export default function Unauthorized() {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-8 text-center'>
      <X className='h-16 w-16 text-destructive' />
      <h1 className='text-gray-900 mt-6 text-3xl font-semibold dark:text-white'>Not Authorized</h1>
      <p className='text-gray-700 dark:text-gray-300 mt-2 text-lg'>Sorry, you are not authorized to view this page.</p>
    </div>
  )
}
