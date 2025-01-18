"use client"

import * as React from "react"

const Section = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return <main className='container min-h-screen justify-center py-16'>{children}</main>
}

export { Section }
