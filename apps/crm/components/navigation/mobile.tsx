"use client"

import * as React from "react"
import Link from "next/link"
import { BellRing, Menu, X } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import store from "store"

import { Avatar, AvatarFallback, AvatarImage, Button, cn } from "@ssp/ui"
import { getInitials } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import type { serverApi } from "@/trpc/server"
import { NotificationView } from "./notification"

const MobileNavigation = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["notification"]["getNotifications"]["query"]>>
}): React.JSX.Element => {
  const [openNavigation, setOpenNavigation] = React.useState<boolean>(false)
  const [openNotificationCenter, setOpenNotificationCenter] = React.useState<boolean>(false)
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const toggleNotificationCenter = () => {
    setOpenNotificationCenter(!openNotificationCenter)
    if (openNavigation) setOpenNavigation(false)
  }

  const toggleOpenNavigation = () => {
    setOpenNavigation(!openNavigation)
    if (openNotificationCenter) setOpenNotificationCenter(false)
  }

  const handleDisconnect = (): void => {
    setIsLoading(true)
    if (typeof window !== "undefined") {
      // document.cookie = `${
      //   !!process.env.VERCEL_URL ? "__Secure-" : ""
      // }next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      document.cookie = "next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "__Secure-next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
    store.clearAll()

    toggleOpenNavigation()

    signOut({
      callbackUrl: `${window.location.origin}/`,
      redirect: true
    }).catch((err) => {
      console.error(err)
      setIsLoading(false)
    })
  }

  return (
    <div className='flex sm:hidden'>
      <div className='flex w-full flex-row items-center justify-between py-4'>
        <Link href='/' className='flex items-center space-x-2 p-2'>
          <Icons.logo className='h-6 w-6' />
        </Link>
        {status === "authenticated" ? (
          <div className='fade-in-1 flex flex-row gap-2'>
            <button onClick={toggleNotificationCenter} className='lg:hidden'>
              <div className='relative flex h-8 w-8 items-center justify-center rounded-full border align-middle'>
                {!!initialData?.filter((notification) => !notification.read).length && (
                  <div className='absolute -right-0 -top-0 flex h-2 w-2 animate-pulse items-center justify-center rounded-full bg-artdevium-azure text-xs'></div>
                )}
                <BellRing className={`${openNotificationCenter ? "hidden" : "block"} h-5 w-5 text-gray-600`} />
                <X className={`${openNotificationCenter ? "block" : "hidden"} h-6 w-6 text-gray-600`} />
              </div>
            </button>
            <button onClick={toggleOpenNavigation} className='lg:hidden'>
              <div className='border-n-1/50 relative flex h-8 w-8 items-center justify-center rounded-full border align-middle'>
                <Menu className={`${openNavigation ? "hidden" : "block"} h-5 w-5 text-gray-600`} />
                <X className={`${openNavigation ? "block" : "hidden"} h-6 w-6 text-gray-600`} />
              </div>
            </button>
          </div>
        ) : (
          status === "unauthenticated" && (
            <Link href='/sign-in'>
              <Button
                variant='white'
                rounded='tr'
                className='fade-in-1 text-xs font-bold uppercase tracking-wider'
                onClick={() => {
                  signIn().catch((err) => {
                    console.error(err)
                  })
                }}
              >
                Sign In
              </Button>
            </Link>
          )
        )}
      </div>

      <div
        className={`${
          openNotificationCenter ? "absolute left-0 top-full min-h-screen w-full bg-background px-4 pb-4" : "hidden"
        }`}
      >
        <NotificationView initialData={initialData} />
      </div>

      <div className={`${openNavigation ? "absolute left-0 top-full min-h-screen w-full bg-background" : "hidden"}`}>
        <div className='flex gap-4 md:gap-8'>
          <div className={cn("flex w-full flex-col px-6 pb-6")}>
            <div className='text-muted-foreground flex flex-row items-center justify-between border-b-2 p-4 text-sm font-medium transition-colors hover:bg-secondary/80 hover:text-primary'>
              <div>
                <div className='text-sm font-semibold tracking-tight text-white'>{session?.prismaUser?.name}</div>
                <div className='text-sm font-semibold tracking-tight text-gray-500'>{session?.prismaUser?.email}</div>
              </div>
              <Avatar className='h-8 w-8'>
                <AvatarImage src={session?.prismaUser?.image ?? ""} alt='@profilePicture' />
                <AvatarFallback>{getInitials(session?.prismaUser?.name)}</AvatarFallback>
              </Avatar>
            </div>

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

            {/* Buttons */}
            <div className='flex flex-col gap-3 py-4'>
              <Button className='border-2' variant='outline' asChild>
                <Link
                  href={"/settings"}
                  onClick={() => {
                    toggleOpenNavigation()
                  }}
                >
                  Manage account
                </Link>
              </Button>

              <Button variant='destructive' onClick={handleDisconnect}>
                {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                <span className='ml-2'>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MobileNavigation }
