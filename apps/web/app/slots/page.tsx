import React from "react"

import { serverApi } from "@/trpc/server"
import SlotsView from "."

const Slots = async () => {
  const allGames = await serverApi.game.getAllWithReq.query({ order: "latest" })
  const allPrimaryAdvert = await serverApi.advert.getAllPrimary.query()
  const allSecondaryAdvert = await serverApi.advert.getAllSecondary.query()
  const homePosts = await serverApi.blog.getOnlyFour.query()
  const providers = await serverApi.providers.getAll.query()
  const reelsGame = await serverApi.reels.getAll.query()
  const featuresGame = await serverApi.features.getAll.query()
  const themeGame = await serverApi.theme.getAll.query()
  const volatilityGame = await serverApi.volatility.getAll.query()

  return (
    <div className='container'>
      <SlotsView
        reelsGame={reelsGame}
        featuresGame={featuresGame}
        themeGame={themeGame}
        volatilityGame={volatilityGame}
        games={allGames}
        homePosts={homePosts}
        allPrimaryAdvert={allPrimaryAdvert}
        allSecondaryAdvert={allSecondaryAdvert}
        providers={providers}
      />
    </div>
  )
}

export default Slots
