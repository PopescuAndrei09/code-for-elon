"use client"

import * as React from "react"
import { formatDistance } from "date-fns"
import { useSession } from "next-auth/react"

import { columns } from "@/app/users/columns"
import { DataTable } from "@/app/users/data-table"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"

const UsersView = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["user"]["getAll"]["query"]>>
}) => {
  const { data: session } = useSession()
  const allUsers = clientApi.user.getAll.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const userData = allUsers.data?.map((user) => {
    return {
      id: user.id,
      name: user.name ?? undefined,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      email: user.email,
      phone: user.phone ?? undefined,
      role: user.role,
      createdAt: formatDistance(user.createdAt, new Date()) + " ago",
      lastSignIn: user.lastSignIn === null ? "Never" : formatDistance(user.lastSignIn, new Date()) + " ago",
      isVip: user.isVip ?? false,
      address: user.address ?? undefined,
      country: user.country ?? undefined,
      state: user.state ?? undefined,
      city: user.city ?? undefined,
      postalCode: user.postalCode ?? undefined,
      language: user.language ?? undefined,
      birthdate: user.birthdate ?? undefined,
      passportOrId: user.passportOrId ?? undefined,
      isMarketingEnabled: user.isMarketingEnabled ?? false,
      image: user.image ?? undefined
    }
  })

  if (session !== null && userData !== undefined)
    return (
      <div className='flex grow items-end justify-end'>
        <div className='h-full flex-1 flex-col space-y-8 p-8 '>
          <div className='flex items-center justify-between space-y-2'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
              <p className='text-muted-foreground'>Here&apos;s a list of your games!</p>
            </div>
          </div>
          <DataTable data={userData} columns={columns} />
        </div>
      </div>
    )
}

export { UsersView }
