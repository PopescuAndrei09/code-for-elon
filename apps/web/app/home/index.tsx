"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@ssp/ui"

import SecondaryLayout from "@/components/advertising/secondary-layout"
import BetsGames from "@/components/bestgames/betsgames"
import CardNews from "@/components/cardNews"
import SwiperComponent from "@/components/swiper/swiper"
import type { serverApi } from "@/trpc/server"
import Faq from "./faq"
import SwiperHome from "./swiperhome"
import SwiperHomeThree from "./swiperhomeThree"
import SwiperHomeTwo from "./swiperhomeTwo"

const HomeView = ({
  games,
  homePosts,
  allSecondaryAdvert
}: {
  games: Awaited<ReturnType<(typeof serverApi)["game"]["getAllWithReq"]["query"]>>
  homePosts: Awaited<ReturnType<(typeof serverApi)["blog"]["getOnlyEight"]["query"]>>
  allSecondaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllSecondary"]["query"]>>
}): React.JSX.Element => {
  return (
    <div className='container flex flex-col justify-start p-4'>
      <div className='image-bg-casino full-width container '>
        <div className='container'>
          <SwiperComponent />
        </div>
      </div>

      <div className='image-bg-bonuses  full-width  w-full p-4'>
        <div className='container '>
          <SecondaryLayout allSecondaryAdvert={allSecondaryAdvert} />
        </div>
      </div>
      <div className=' w-full space-y-8 p-4'>
        <div className='p-4 text-center text-[40px] font-semibold text-white'>Latest Casino Tips</div>
        <div className=' mb-12 mt-12'>
          <CardNews homePosts={homePosts} />
        </div>
        <div className='flex justify-center p-4'>
          <Link href={"/blog"}>
            <Button>Show all articles</Button>
          </Link>
        </div>
      </div>

      <div className='image-bg-four full-width w-full '>
        <div className='container p-4'>
          <BetsGames />
        </div>
      </div>

      <div className='image-bg-casino full-width  w-full'>
        <div className='container flex flex-col'>
          <div className='mt-8 text-center text-[40px] font-semibold text-white'>Slots</div>

          <div className=' '>
            <SwiperHome games={games} />
            <div className='text-right'>
              <Link href={"/slots"}>Show all</Link>
            </div>
          </div>

          <div className='mt-12 space-y-7'>
            <SwiperHomeTwo games={games} />
            <div className='text-right'>
              <Link href={"/slots"}>Show all</Link>
            </div>
          </div>

          <div className='mt-12 space-y-7'>
            <SwiperHomeThree games={games} />
            <div className='text-right'>
              <Link href={"/slots"}>Show all</Link>
            </div>
          </div>

          <div className='flex justify-center p-4'>
            <Link href={"/slots"}>
              <Button>See all slots</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className=' w-full   '>
        <div className='mt-10 p-4'>
          <Faq />
        </div>
      </div>
    </div>
  )
}

export default HomeView
