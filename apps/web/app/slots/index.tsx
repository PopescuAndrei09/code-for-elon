"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

// import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@ssp/ui"

import SecondaryLayout from "@/components/advertising/secondary-layout"
import CardNews from "@/components/cardNews"
import CardNewsCasino from "@/components/cardNewsCasino"
import { Filters } from "@/components/filter/filters"
import { Pagination } from "@/components/pagination/pagination"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
// import { gamesDB } from "../../../../packages/db/seedData/games-db"
import SlotsText from "./slotstext"

const ITEMS_PER_PAGE = 10
export const SlotsView = ({
  games,
  homePosts,
  allSecondaryAdvert,
  providers,
  reelsGame,
  featuresGame,
  themeGame,
  volatilityGame
}: {
  homePosts: Awaited<ReturnType<(typeof serverApi)["blog"]["getOnlyFour"]["query"]>>
  games: Awaited<ReturnType<(typeof serverApi)["game"]["getAllWithReq"]["query"]>>
  allPrimaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllPrimary"]["query"]>>
  allSecondaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllSecondary"]["query"]>>
  providers: Awaited<ReturnType<(typeof serverApi)["providers"]["getAll"]["query"]>>
  reelsGame: Awaited<ReturnType<(typeof serverApi)["reels"]["getAll"]["query"]>>
  featuresGame: Awaited<ReturnType<(typeof serverApi)["features"]["getAll"]["query"]>>
  themeGame: Awaited<ReturnType<(typeof serverApi)["theme"]["getAll"]["query"]>>
  volatilityGame: Awaited<ReturnType<(typeof serverApi)["volatility"]["getAll"]["query"]>>
}) => {
  const [page, setPage] = React.useState(1)
  const [isOrder, setIsOrder] = React.useState<string>("latest")
  const [myProviders, setMyProviders] = React.useState<string[]>([])
  const [myReels, setMyReels] = React.useState<string[]>([])
  const [myFeatures, setMyFeatures] = React.useState<string[]>([])
  const [myThemes, setMyThemes] = React.useState<string[]>([])
  const [myVolatility, setMyVolatility] = React.useState<string[]>([])
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    // Fetch data for the new page...
  }
  const [hoveredGame, setHoveredGame] = React.useState<string | null>(null)

  const router = useRouter()

  const AllGames = clientApi.game.getAllWithReq.useQuery(
    {
      order: isOrder,
      providers: myProviders,
      reels: myReels,
      features: myFeatures,
      themes: myThemes,
      volatility: myVolatility
    },
    {
      initialData: games,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  )
  const currentGames = AllGames.data
  console.log("🚀 ~ currentGames:", currentGames)

  const handleMouseEnter = (gameId: string) => {
    setHoveredGame(gameId)
  }

  const handleMouseLeave = () => {
    setHoveredGame(null)
  }

  // const [page, setPage] = React.useState(1)

  // const handlePageChange = (newPage: number) => {
  //   setPage(newPage)
  //   // Fetch data for the new page...
  // }

  return (
    <div className='flex w-full flex-col '>
      <div className='flex flex-col items-center gap-16 lg:flex-row lg:items-stretch'>
        <div className='w-4/12'>
          <Filters
            volatilityGame={volatilityGame}
            reelsGame={reelsGame}
            featuresGame={featuresGame}
            themeGame={themeGame}
            isOrder={isOrder}
            setIsOrder={setIsOrder}
            providers={providers}
            setMyProviders={setMyProviders}
            setMyReels={setMyReels}
            setMyFeatures={setMyFeatures}
            setMyThemes={setMyThemes}
            setMyVolatility={setMyVolatility}
            myProviders={myProviders}
            myReels={myReels}
            myFeatures={myFeatures}
            myThemes={myThemes}
            myVolatility={myVolatility}
          />
        </div>
        <div className='flex w-full flex-col items-center '>
          <div className='grid w-full grid-cols-2 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {currentGames?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((game) => (
              <div
                key={game.id}
                onMouseEnter={() => handleMouseEnter(game.id)}
                onMouseLeave={handleMouseLeave}
                className='relative'
              >
                <Image src={game.images[0]} alt={game.name} width={180} height={180} />
                {hoveredGame === game.id && (
                  <div className='absolute inset-0 flex flex-col space-y-4 bg-black bg-opacity-50 p-1'>
                    <span className='text-center text-white'>{game.name}</span>
                    <div className='mt-2 flex flex-col gap-2'>
                      <Button className='rounded-3xl' onClick={() => router.push(`/game?id=${game.id}`)}>
                        Play for free
                      </Button>
                      <Link href={game?.liveGameUrl || "#"}>
                        <Button className='whitespace-normal rounded-3xl bg-white'> Play with real money</Button>
                      </Link>
                    </div>
                    {/* <div className='text-center'>Slot review</div> */}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil((currentGames?.length || 0) / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className='image-bg-bonuses  full-width mt-20 w-full p-4'>
        <div className='container '>
          <SecondaryLayout allSecondaryAdvert={allSecondaryAdvert} />
        </div>
      </div>
      <div className='mt-20 space-y-4 p-4'>
        <div className='image-bg-casino full-width w-full '>
          <div className='p-4 text-center text-[40px] font-semibold text-white'>Latest Casino Tips</div>
          <div className='container mb-12 mt-12'>
            <CardNewsCasino homePosts={homePosts} />
          </div>
          <div className='flex justify-center p-4'>
            <Link href={"/blog"}>
              <Button>Show all articles</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <SlotsText />
      </div>
    </div>
  )
}

export default SlotsView
