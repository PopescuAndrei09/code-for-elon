import React from "react"
import Image from "next/image"
import Link from "next/link"

import type { Advert } from "@ssp/api/src/routers/advert.router"
import { Button } from "@ssp/ui"

const SecondaryCard = ({ advert, index }: { advert: Advert; index: number }) => {
  const [isInfoCollapsed, setIsInfoCollapsed] = React.useState<boolean>(true)

  const toggleInfoCollapse = () => {
    setIsInfoCollapsed(!isInfoCollapsed)
  }

  return (
    <div className=' flex w-full flex-col  items-center p-8'>
      <div className='custom-background flex h-full w-full flex-col items-center  justify-between space-y-4  rounded-3xl border-2  p-2 md:flex-col md:space-y-4 lg:h-24 lg:flex-row  xl:h-28'>
        <div className=' flex  flex-col items-start gap-4 lg:flex-row lg:items-center xl:flex-row  xl:items-center'>
          <div className='xl: flex  h-9 w-9 items-center justify-center rounded-full bg-yellow-300'>
            <span className='text-black'>{index + 1}</span>
          </div>
          <div className=' flex  h-12 w-56  items-center justify-center rounded-3xl  bg-yellow-300 lg:h-20 lg:w-44 '>
            {advert.image && <Image src={advert?.image} alt='betano' width={120} height={120} />}
          </div>
        </div>
        <div className='flex  flex-col items-center md:items-start xl:flex-col '>
          <span>{advert.title}</span>
          <span>⭐ ⭐ ⭐ ⭐ ⭐ {advert.rate}</span>
        </div>
        <div className='flex flex-col  md:flex-col  xl:flex-row xl:gap-8'>
          <div className=' flex flex-col items-center text-center '>
            <span>✔️ Nice free bonuses</span>
            <span>✔️ Nice free bonuses</span>
          </div>
          <div className=' hidden flex-col items-center text-center lg:hidden xl:flex'>
            <span>✔️ Nice free bonuses</span>
            <span>✔️ Nice free bonuses</span>
          </div>
        </div>
        {/* {advert.collapsed && ( */}
        <div className='    h-14 w-56'>
          <Link href={"/bonus"}>
            <Button className='h-14 w-56 rounded-3xl' onClick={toggleInfoCollapse}>
              Bonus
              {/* {isInfoCollapsed ? (
            <ChevronDown className='cursor-pointer items-end' />
          ) : (
            <ChevronUp className='cursor-pointer' />
          )} */}
            </Button>
          </Link>
        </div>
      </div>
      {/* {advert.collapsed && (
        <div className='w-full px-4'>
          {!isInfoCollapsed && (
            <div className='mt-4 flex items-center justify-center'>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi consequatur.
            </div>
          )}
        </div>
      )} */}
    </div>
  )
}

export { SecondaryCard }
