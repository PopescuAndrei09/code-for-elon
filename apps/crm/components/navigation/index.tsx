"use client"

import * as React from "react"

import type { serverApi } from "@/trpc/server"
import { DesktopNavigation } from "./desktop"
import { MobileNavigation } from "./mobile"

const NavigationBar = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["notification"]["getNotifications"]["query"]>>
}): React.JSX.Element => {
  return (
    <nav className='fixed left-0 right-0 top-0 z-30 mx-auto border-b bg-background px-8'>
      <DesktopNavigation initialData={initialData} />
      <MobileNavigation initialData={initialData} />
    </nav>
  )
}

export { NavigationBar }
