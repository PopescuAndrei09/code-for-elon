import React from "react"
import Image from "next/image"

import type { Advert } from "@ssp/api/src/routers/advert.router"

const PrimaryCard = ({ advert }: { advert: Advert }) => {
  return (
    <div className='flex flex-row items-center justify-between gap-2 rounded-3xl rounded-tl-lg  bg-border p-4'>
      <div>{advert.image && <Image src={advert?.image} alt='betano' width={120} height={120} />}</div>
      <div className='flex flex-col'>
        <span>{advert.title}</span>
        <span>⭐ {advert?.rate}</span>
        <span>{advert.description}</span>
      </div>
      <div>
        <span className='flex'>🎁 500 RON</span>
      </div>
    </div>
  )
}

export { PrimaryCard }
