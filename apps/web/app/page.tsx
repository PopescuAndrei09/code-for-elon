import * as React from "react"
import type { Metadata } from "next"

import HomeView from "@/app/home"
import { siteMetadata } from "@/components/metadata"
import { serverApi } from "@/trpc/server"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Home`
}

const HomePage = async (): Promise<React.JSX.Element> => {
  const allGames = await serverApi.game.getAllWithReq.query({ order: "latest" })
  const homePosts = await serverApi.blog.getOnlyEight.query()
  const allSecondaryAdvert = await serverApi.advert.getAllSecondary.query()

  return <HomeView games={allGames} homePosts={homePosts} allSecondaryAdvert={allSecondaryAdvert} />
}

export default HomePage
