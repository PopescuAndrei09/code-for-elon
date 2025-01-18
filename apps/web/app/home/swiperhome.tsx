import * as React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import "./styles.css"

// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"

import { Button } from "@ssp/ui"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
// import { Card } from "@ssp/ui"

import HomeCard from "./homecard"

export const SwiperHome = ({
  games
}: {
  games: Awaited<ReturnType<(typeof serverApi)["game"]["getAllWithReq"]["query"]>>
}) => {
  const [hoveredGame, setHoveredGame] = React.useState<string | null>(null)
  const router = useRouter()

  const AllGames = clientApi.game.getAllWithReq.useQuery(
    { order: "latest" },
    {
      initialData: games,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  )
  const currentGames = AllGames.data

  const handleMouseEnter = (gameId: string) => {
    setHoveredGame(gameId)
  }

  const handleMouseLeave = () => {
    setHoveredGame(null)
  }

  return (
    <div className='relative'>
      <div className='my-8 mt-4 text-sm font-semibold text-white'>
        <div>Most popular </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          style={{ width: "auto" }}
          className='max-w-[1440px]'
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          breakpoints={{
            320: {
              slidesPerView: 0.5
            },
            375: {
              slidesPerView: 1.3
            },
            425: {
              slidesPerView: 1.8
            },
            768: {
              slidesPerView: 2.5
            },
            1024: {
              slidesPerView: 4.25
            }
          }}
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div
                onMouseEnter={() => handleMouseEnter(game.id)}
                onMouseLeave={handleMouseLeave}
                className='relative h-80 w-52 cursor-pointer rounded-lg '
              >
                <Image src={game.images[0]} alt={game.name} layout='fill' objectFit='cover' loading='eager' priority />
                {hoveredGame === game.id && (
                  <div className='absolute inset-0 flex w-full flex-col space-y-8 bg-black bg-opacity-50 px-4'>
                    <span className='text-center text-white'>{game.name}</span>
                    <div className='mt-2 flex w-full flex-col gap-2'>
                      <Button className='w-full rounded-3xl' onClick={() => router.push(`/game?id=${game.id}`)}>
                        Play for free
                      </Button>
                      <Link href={game?.liveGameUrl || "#"}>
                        <Button className='w-full whitespace-normal rounded-3xl bg-white'>Play with real money</Button>
                      </Link>
                      <div className='flex justify-center'>
                        <span>Review</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='absolute right-0 top-[70px] mx-auto mr-12 mt-6 hidden  items-center md:right-0 md:top-[-50px] md:mr-12 md:mt-6  md:flex '>
        <div className='swiper-button-prev ml-[-150px] h-11  w-24 rounded-xl'>
          <div className='arrow-left'></div>
        </div>
        <div className='swiper-button-next right-0'>
          <div className='arrow-right'></div>
        </div>
      </div>
    </div>
  )
}

export default SwiperHome
