"use client"

import React from "react"
import Image from "next/image"

// import { Pagination } from "swiper/modules"

// import { PrimaryLayout } from "@/components/advertising/primary-layout"
// import SecondaryLayout from "@/components/advertising/secondary-layout"
import { Filters } from "@/components/filter/filters"

const BonusView = () => {
  return (
    <div className='flex h-full w-full flex-col '>
      <div className='flex flex-col md:items-center md:gap-2 lg:flex lg:flex-row lg:items-stretch lg:gap-8'>
        {/* <Filters /> */}
        <div className='flex   flex-col  items-center '>
          <div className='grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
            <div className=' w-56  border lg:m-0'>
              <div className='flex h-20 w-full items-center justify-center rounded-3xl bg-[#98C743]'>
                <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
              </div>
              <div className='flex flex-col gap-2 p-4 '>
                <div className=' text-2xl font-medium text-white'>First Casino</div>
                <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                <div className=' text-base font-medium text-white'> 🎁 Bonus 100% money 5.0</div>
                <div className='inline-flex  items-center justify-center gap-2.5 rounded-full bg-yellow-300 px-8 py-3.5'>
                  <div className=' text-base font-medium text-stone-900'>Visit casino</div>
                </div>
                <div className="font-['Inter Display'] text-center text-base font-medium text-white underline">
                  Check review
                </div>
              </div>
            </div>

            <div className=' w-56  border lg:m-0'>
              <div className='flex h-20 w-full items-center justify-center rounded-3xl bg-[#98C743]'>
                <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
              </div>
              <div className='flex flex-col gap-2 p-4 '>
                <div className=' text-2xl font-medium text-white'>First Casino</div>
                <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                <div className=' text-base font-medium text-white'> 🎁 Bonus 100% money 5.0</div>
                <div className='inline-flex  items-center justify-center gap-2.5 rounded-full bg-yellow-300 px-8 py-3.5'>
                  <div className=' text-base font-medium text-stone-900'>Visit casino</div>
                </div>
                <div className="font-['Inter Display'] text-center text-base font-medium text-white underline">
                  Check review
                </div>
              </div>
            </div>

            <div className='w-56  border lg:m-0'>
              <div className='flex h-20 w-full items-center justify-center rounded-3xl bg-[#98C743]'>
                <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
              </div>
              <div className='flex flex-col gap-2 p-4 '>
                <div className=' text-2xl font-medium text-white'>First Casino</div>
                <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                <div className=' text-base font-medium text-white'> 🎁 Bonus 100% money 5.0</div>
                <div className='inline-flex  items-center justify-center gap-2.5 rounded-full bg-yellow-300 px-8 py-3.5'>
                  <div className=' text-base font-medium text-stone-900'>Visit casino</div>
                </div>
                <div className="font-['Inter Display'] text-center text-base font-medium text-white underline">
                  Check review
                </div>
              </div>
            </div>

            <div className=' w-56  border lg:m-0'>
              <div className='flex h-20 w-full items-center justify-center rounded-3xl bg-[#98C743]'>
                <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
              </div>
              <div className='flex flex-col gap-2 p-4 '>
                <div className=' text-2xl font-medium text-white'>First Casino</div>
                <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                <div className=' text-base font-medium text-white'> 🎁 Bonus 100% money 5.0</div>
                <div className='inline-flex  items-center justify-center gap-2.5 rounded-full bg-yellow-300 px-8 py-3.5'>
                  <div className=' text-base font-medium text-stone-900'>Visit casino</div>
                </div>
                <div className="font-['Inter Display'] text-center text-base font-medium text-white underline">
                  Check review
                </div>
              </div>
            </div>
          </div>
          {/* <Pagination
            currentPage={page}
            totalPages={Math.ceil((currentGames?.length || 0) / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          /> */}
        </div>
        {/* <div>
          <PrimaryLayout allPrimaryAdvert={allPrimaryAdvert} />
        </div> */}
      </div>
      <div className='mt-12 w-full'>
        {/* <div className='image-bg-bonuses full-width mt-20 w-full p-4'>
          <SecondaryLayout allSecondaryAdvert={allSecondaryAdvert} />
        </div> */}
      </div>
      {/* <div className='mt-12'>
        <SlotsText />
      </div> */}
    </div>
  )
}

export { BonusView }
