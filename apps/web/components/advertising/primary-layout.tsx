import * as React from "react"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import { PrimaryCard } from "./primary-card"

const PrimaryLayout = ({
  allPrimaryAdvert
}: {
  allPrimaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllPrimary"]["query"]>>
}) => {
  const PrimaryAdvert = clientApi.advert.getAllPrimary.useQuery(undefined, {
    initialData: allPrimaryAdvert,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const currentPrimaryAdverts = PrimaryAdvert.data

  console.log(currentPrimaryAdverts, "adv")

  return (
    <div className='flex-start  flex flex-col gap-4 md:w-[350px] '>
      {currentPrimaryAdverts.map((advert, index) => {
        return <PrimaryCard advert={advert} key={index} />
      })}
    </div>
  )
}

export { PrimaryLayout }
