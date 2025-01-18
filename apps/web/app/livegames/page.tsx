import React from "react"

import { serverApi } from "@/trpc/server"
import { LiveGamesView } from "."

const LiveGamePage = async () => {
  const allGames = await serverApi.game.getAllWithReq.query({ order: "latest" })
  const allSecondaryAdvert = await serverApi.advert.getAllSecondary.query()
  const homePosts = await serverApi.blog.getOnlyFour.query()

  return (
    <div>
      <LiveGamesView games={allGames} allSecondaryAdvert={allSecondaryAdvert} homePosts={homePosts} />
    </div>
  )
}
export default LiveGamePage
