import * as React from "react"
import type { Metadata } from "next"

import { siteMetadata } from "@/components/metadata"
import { serverApi } from "@/trpc/server"
import { CasinoView } from "."

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Users`
}

export default async function UsersPage(): Promise<React.JSX.Element> {
  const allCasinos = await serverApi.casino.getAll.query()

  return <CasinoView initialData={allCasinos} />
}
