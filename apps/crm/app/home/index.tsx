"use client"

import * as React from "react"
import { useSession } from "next-auth/react"

import { Separator } from "@ssp/ui"

import { Icons } from "@/components/icons"

const HomeView = (): React.JSX.Element => {
  const { data: session } = useSession()

  return (
    <div className='flex grow items-end justify-end'>
      <div className='h-full flex-1 flex-col gap-2 space-y-8  p-8'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h1 className='mb-4 text-3xl font-bold'>
              Hei, {session?.prismaUser.firstName} {session?.prismaUser.lastName} !
            </h1>
            <h2 className='flex items-center justify-center gap-4 text-2xl font-bold tracking-tight '>
              Welcome back to CRM <Icons.logo className='h8 w-8' />, we are glad to have you here today
            </h2>
          </div>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row'>
          <div className='mx-4 max-w-6xl grow space-y-6 rounded-xl border bg-card p-10 pb-16 md:mx-12 lg:mx-16'>
            <h1 className='text-3xl font-bold '>Notifications</h1>
            <Separator />
            <div className='no-scrollbar max-h-96 w-full overflow-auto'>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </div>
          <div className='mx-4 max-w-6xl grow space-y-6 rounded-xl border bg-card p-10 pb-16 md:mx-12 lg:mx-16'>
            <h1 className='text-3xl font-bold '>New games </h1>
            <Separator />
            <div className='no-scrollbar max-h-96 w-full overflow-auto'>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView
