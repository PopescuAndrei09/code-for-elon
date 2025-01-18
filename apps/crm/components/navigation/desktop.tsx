"use client"

import * as React from "react"
import Link from "next/link"
import { BellRing } from "lucide-react"
import { signIn, useSession } from "next-auth/react"

import { Button, Popover, PopoverContent, PopoverTrigger, Skeleton } from "@ssp/ui"

import { Icons } from "@/components/icons"
import type { serverApi } from "@/trpc/server"
import { MainNav } from "./main-nav"
import { NotificationView } from "./notification"
import { UserNav } from "./user-nav"

const DesktopNavigation = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["notification"]["getNotifications"]["query"]>>
}): React.JSX.Element => {
  const { status } = useSession()

  const [openNotificationCenter, setOpenNotificationCenter] = React.useState(false)

  const toggleOpenNotificationCenter = () => {
    setOpenNotificationCenter(!openNotificationCenter)
  }

  return (
    <div className='hidden items-center p-4 sm:flex'>
      <Link href='/' className='flex items-center space-x-2 p-2'>
        <Icons.logo className='h-6 w-6' />
      </Link>
      <React.Fragment>
        <Icons.slash className='h-6 w-6 text-white opacity-20' />
        <MainNav className='mx-6' />
      </React.Fragment>

      <div className='ml-auto flex items-center space-x-4 '>
        {status === "authenticated" && (
          <Popover>
            <PopoverTrigger onClick={toggleOpenNotificationCenter}>
              <div className='relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border align-middle'>
                {!!initialData?.filter((notification) => !notification.read).length && (
                  <div className='absolute -right-0 -top-0 flex h-2 w-2 animate-pulse items-center justify-center rounded-full bg-artdevium-azure text-xs'></div>
                )}
                <BellRing className='text-n-1/50 h-6 w-6 text-gray-600' />
              </div>
            </PopoverTrigger>
            <PopoverContent className='mr-10 mt-3 hidden h-[450px] w-[452px] sm:mr-14 sm:block'>
              <NotificationView initialData={initialData} />
            </PopoverContent>
          </Popover>
        )}
        <React.Suspense fallback={<Skeleton className='border-n-1/50 h-10 w-10 rounded-full border' />}>
          {status === "authenticated" && <UserNav />}
        </React.Suspense>
        {status === "unauthenticated" && (
          <div className='fade-in-1 ml-auto flex items-center space-x-4'>
            <Link href='/sign-in'>
              <Button
                className='font-code text-xs font-bold uppercase tracking-wider'
                variant={"outline"}
                onClick={() => {
                  signIn().catch((err) => {
                    console.error(err)
                  })
                }}
              >
                Log In
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button variant={"white"}>Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export { DesktopNavigation }
