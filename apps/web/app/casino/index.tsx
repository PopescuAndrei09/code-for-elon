"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@ssp/ui"

import SecondaryLayout from "@/components/advertising/secondary-layout"
import CardNewsCasino from "@/components/cardNewsCasino"
import { FiltersCasino } from "@/components/filter/filtercasino"
import { Filters } from "@/components/filter/filters"
import { Pagination } from "@/components/pagination/pagination"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import SlotsText from "../slots/slotstext"
import CardCasino from "./cardCasino"

const ITEMS_PER_PAGE = 10

export const CasinoView = ({
  homePosts,
  allSecondaryAdvert,
  casinoBonus
}: {
  homePosts: Awaited<ReturnType<(typeof serverApi)["blog"]["getOnlyFour"]["query"]>>
  allSecondaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllSecondary"]["query"]>>
  casinoBonus: Awaited<ReturnType<(typeof serverApi)["casino"]["getAll"]["query"]>>
}) => {
  const [page, setPage] = React.useState(1)
  // const [isOrder, setIsOrder] = React.useState<string>("latest")
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    // Fetch data for the new page...
  }
  // const [hoveredGame, setHoveredGame] = React.useState<string | null>(null)

  // const router = useRouter()

  const AllBonuses = clientApi.casino.getAll.useQuery(undefined, {
    initialData: casinoBonus,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const currentBonuses = AllBonuses.data

  console.log(currentBonuses, "bonus")

  // const handleMouseEnter = (gameId: string) => {
  //   setHoveredGame(gameId)
  // }

  // const handleMouseLeave = () => {
  //   setHoveredGame(null)
  // }

  return (
    <div className='container flex w-full flex-col'>
      <div className='flex flex-col items-center gap-16 lg:flex-row lg:items-stretch'>
        <div className=''>
          <FiltersCasino />
        </div>
        <div className='flex w-full flex-col items-center '>
          <div className='grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            {currentBonuses?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((casino) => (
              <div key={casino.id} className='flex w-56 flex-col border md:w-52 lg:m-0 lg:w-48 xl:w-56'>
                <div className='flex h-20 w-full items-center justify-center rounded-3xl bg-[#98C743]'>
                  <div>{casino.image && <Image src={casino?.image} alt='betano' width={120} height={120} />}</div>
                </div>
                <div className='flex flex-grow flex-col gap-2 p-4'>
                  <div className='text-2xl font-medium text-white'>{casino.title}</div>
                  <div className='text-base font-normal text-white text-opacity-70'>{casino.description}</div>
                  <div className='flex-grow text-base font-medium text-white'>🎁 Bonus {casino.promoCode}</div>
                  <div className='flex justify-center'>
                    <a href={casino.href} target='_blank' rel='noopener noreferrer'>
                      <div className='inline-flex items-center justify-center gap-2.5 rounded-full bg-yellow-300 px-8 py-3.5'>
                        <div className='text-base font-medium text-stone-900'>Visit casino</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil((currentBonuses?.length || 0) / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className='image-bg-bonuses  full-width mt-20 w-full p-4'>
        <div className='container '>
          <SecondaryLayout allSecondaryAdvert={allSecondaryAdvert} />
        </div>
      </div>
      <div className='mt-20 space-y-4'>
        <div className='text-center text-[40px] font-semibold text-white'>Latest Casino Tips</div>

        <CardNewsCasino homePosts={homePosts} />

        <div className='flex justify-center'>
          <Button>Show all articles</Button>
        </div>
      </div>

      <div className='mt-10'>
        <SlotsText />
      </div>
    </div>
  )
}

export default CasinoView
