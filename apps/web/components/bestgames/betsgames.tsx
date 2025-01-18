import React from "react"
import Image from "next/image"

import { Button } from "@ssp/ui"

export const BetsGames = () => {
  return (
    <div className='container flex flex-col gap-4 md:flex-row'>
      <div className='rounded-3xl border-2 bg-transparent md:p-14'>
        <div className='space-y-8 p-4'>
          <div className='flex flex-col space-y-8'>
            <div className='text-[40px] font-semibold text-white'>Our best games</div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
              magna aliqua
            </span>
          </div>
          <div className='flex flex-col  gap-2 md:flex-row md:items-center md:gap-10'>
            <Button className='h-11 w-32 rounded-3xl'>Play now</Button>
            <div className='flex items-center gap-4'>
              <Image src={"/images/Avatar1.png"} alt='' width={50} height={50} />
              <span>Lorem ipsum dolor sit amet,consectetur 😊</span>
            </div>
          </div>
        </div>
      </div>

      <div className='grid w-full grid-cols-2 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col justify-evenly rounded-3xl border-4 p-2'>
          <div className='text-center'>Blackjack</div>
          <Image src={"/images/Blackjack.png"} alt='img' width={150} height={50} />
        </div>
        <div className=' flex flex-col justify-evenly space-y-4 rounded-3xl border-2 p-2'>
          <div className='text-center'>Poker</div>
          <Image src={"/images/PokerSet.png"} alt='img' width={150} height={50} />
        </div>
        <div className=' flex flex-col justify-evenly space-y-4 rounded-3xl border-2 p-2'>
          <div className='text-center'>Ruleta</div>
          <Image src={"/images/Roulette.png"} alt='img' width={150} height={50} />
        </div>
        <div className=' flex flex-col justify-evenly space-y-4 rounded-3xl border-2 p-2'>
          <div className='text-center'>Sloturi</div>
          <Image src={"/images/PokerTable.png"} alt='img' width={150} height={50} />
        </div>
        <div className=' flex flex-col justify-evenly space-y-4 rounded-3xl border-2 p-2'>
          <div className='text-center'>Bingo</div>
          <Image src={"/images/Bingo.png"} alt='img' width={150} height={50} />
        </div>
        <div className=' flex flex-col justify-evenly space-y-4 rounded-3xl border-2 p-2'>
          <div className='text-center'>Bacarat</div>
          <Image src={"/images/CasinoRouletteTable.png"} alt='img' width={150} height={50} />
        </div>
      </div>
    </div>
  )
}

export default BetsGames
