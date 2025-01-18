"use client"

import * as React from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@ssp/ui"
import { getInitials } from "@ssp/utils"

const UserNav = (): React.JSX.Element => {
  const { data: session } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='fade-in-1 relative mr-2 h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={session?.prismaUser.image ?? ""} alt='@profilePicture' />
            <AvatarFallback>{getInitials(session?.prismaUser.name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-3 w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{session?.prismaUser.name}</p>
            <p className='text-muted-foreground text-xs leading-none'>{session?.prismaUser.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href='/settings'>
            <DropdownMenuItem className='hover:cursor-pointer'>
              Settings
              <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            if (typeof window !== "undefined") {
              // document.cookie = `${
              //   !!process.env.VERCEL_URL ? "__Secure-" : ""
              // }next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
              document.cookie = "next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
              document.cookie = "__Secure-next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            }

            signOut({
              callbackUrl: `${window.location.origin}/`,
              redirect: true
            }).catch((err) => {
              console.error(err)
            })
          }}
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { UserNav }
