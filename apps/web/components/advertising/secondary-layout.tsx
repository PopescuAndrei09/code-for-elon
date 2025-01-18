import * as React from "react"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import { SecondaryCard } from "./secondary-card"

export const SecondaryLayout = ({
  allSecondaryAdvert
}: {
  allSecondaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllSecondary"]["query"]>>
}) => {
  const SecondaryAdverts = clientApi.advert.getAllSecondary.useQuery(undefined, {
    initialData: allSecondaryAdvert,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const SecondaryAdvertsData = SecondaryAdverts.data
  // console.log(SecondaryAdvertsData, "secondary")

  return (
    <div className='custom-background m-auto h-full w-full rounded-xl border p-4  '>
      <div className='p-4 text-center text-[40px] font-semibold text-white'>Discover best bonuses</div>

      <div className='no-scrollbar max-h-screen space-y-4 overflow-auto'>
        {SecondaryAdvertsData.slice(0, 5).map((advert, index) => {
          return <SecondaryCard advert={advert} key={index} index={index} />
        })}
      </div>
    </div>
  )
}

export default SecondaryLayout
