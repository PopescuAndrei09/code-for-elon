import * as React from "react"
import type { Metadata } from "next"

import { AdvertView } from "@/app/adverts"
import { siteMetadata } from "@/components/metadata"
import { serverApi } from "@/trpc/server"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Users`
}

export default async function UsersPage(): Promise<React.JSX.Element> {
  const allAdverts = await serverApi.advert.getAll.query()

  return <AdvertView initialData={allAdverts} />
}
