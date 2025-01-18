"use client"

import * as React from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

// import { gamesDB } from "@ssp/db/seedData/games-db"

import { clientApi } from "@/trpc/client"

// import type { serverApi } from "@/trpc/server"

const GameView = () => {
  const searchParams = useSearchParams()

  const id = searchParams.get("id") || "id"

  const gameData = clientApi.game.getOneWithReq.useQuery(
    { id: id },
    {
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  )
  const game = gameData.data

  return (
    <div className='container flex flex-col gap-8'>
      {game && (
        <div className='flex flex-col justify-center gap-4 md:flex-row'>
          <div className='flex w-full flex-col items-center justify-center space-y-4 rounded-3xl   '>
            <iframe
              className='w-96 md:w-[640px] lg:w-[780px] xl:w-[1024px] 2xl:w-[1192px]'
              src={game.gameDemoUrl ? game.gameDemoUrl : ""}
              title='Game Demo'
              height='600'
              frameBorder='0'
            />
            <div dangerouslySetInnerHTML={{ __html: game?.description || "" }} />
          </div>
          <div className='flex w-full justify-center'>
            <div className='flex  flex-col space-y-4 rounded-3xl border bg-accent p-4 '>
              <div className='flex flex-col gap-4'>
                <div className='m-auto flex h-12 w-56 items-center justify-center  rounded-3xl bg-[#98C743]'>
                  <div className=' text-2xl text-black'>{game?.name}</div>
                </div>
                <div className='flex justify-center'>
                  <Image
                    src={game?.images[0]}
                    alt={game?.name}
                    loading='eager'
                    width={230}
                    height={230}
                    className='rounded-3xl'
                  />
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <div>Id:</div>
                <span>{game.apiId}</span>
              </div>
              <div className='flex flex-row justify-between'>
                <div>Min bet:</div>
                <span>{game.gameRequirement?.minMaxBet}</span>
              </div>
              <div className='flex flex-row justify-between'>
                <div>Max bet:</div>
                <span>{game.gameRequirement?.maxWinProbability}</span>
              </div>
              <div className='flex flex-row justify-between'>
                <div>Reels:</div>
                <span>{game.gameRequirement?.reels}</span>
              </div>
              <div className='flex flex-row justify-between'>
                <div>RTP:</div>
                <span>{game.gameRequirement?.rtp}</span>
              </div>
              <div className='flex flex-row justify-between'>
                <div>Game launch:</div>
                <span>{new Date(game.gameRequirement?.releaseDate || Date.now()).toLocaleDateString("ro-Ro")}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!game && <p>Game not found</p>}
    </div>
  )
}

export default GameView
