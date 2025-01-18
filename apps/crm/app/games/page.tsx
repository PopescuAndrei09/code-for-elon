import * as React from "react"
import type { Metadata } from "next"

import { GameView } from "@/app/games"
import { siteMetadata } from "@/components/metadata"
import { serverApi } from "@/trpc/server"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Games`
}

const GamesPage = async (): Promise<React.JSX.Element> => {
  const allGames = await serverApi.game.getAll.query()
  const allFeatures = await serverApi.features.getAll.query()
  const allProviders = await serverApi.providers.getAll.query()
  const allReels = await serverApi.reels.getAll.query()
  const allTheme = await serverApi.theme.getAll.query()
  const allVolatility = await serverApi.volatility.getAll.query()

  return (
    <GameView
      initialData={allGames}
      allFeatures={allFeatures}
      allProviders={allProviders}
      allReels={allReels}
      allTheme={allTheme}
      allVolatility={allVolatility}
    />
  )
}

export default GamesPage
