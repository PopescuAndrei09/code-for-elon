import React from "react"

import { serverApi } from "@/trpc/server"
import CasinoView from "."

const Casino = async () => {
  const homePosts = await serverApi.blog.getOnlyFour.query()
  const allSecondaryAdvert = await serverApi.advert.getAllSecondary.query()
  const casinoBonus = await serverApi.casino.getAll.query()
  // const providers = await serverApi.providers.getAll.query()

  return <CasinoView casinoBonus={casinoBonus} homePosts={homePosts} allSecondaryAdvert={allSecondaryAdvert} />
}

export default Casino
