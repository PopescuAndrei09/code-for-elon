import * as React from "react"
import type { Metadata } from "next"
import { X } from "lucide-react"

import { siteMetadata } from "@/components/metadata"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Page Not Found`
}

export default function NotFound() {
  return (
    <Section>
      <div className='flex flex-col items-center justify-center px-4 py-8 text-center'>
        <X className='h-16 w-16 text-destructive' />
        <h1 className='mt-6 text-3xl font-semibold text-gray-900 dark:text-white'>404 - Page Not Found</h1>
        <p className='mt-2 text-lg text-gray-700 dark:text-gray-300'>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </Section>
  )
}
