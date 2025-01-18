import * as React from "react"
import type { Metadata } from "next"

import { UsersView } from "@/app/users"
import { siteMetadata } from "@/components/metadata"
import { serverApi } from "@/trpc/server"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Users`
}

export default async function UsersPage(): Promise<React.JSX.Element> {
  const allUsers = await serverApi.user.getAll.query()
  return <UsersView initialData={allUsers} />
}
