import React from "react"
import Image from "next/image"

import { Button } from "@ssp/ui"

export const Reviews = () => {
  return (
    <>
      <div className='flex flex-col space-y-4'>
        <div className='flex w-full items-center justify-between  rounded-3xl border'>
          <div className='flex flex-row items-center'>
            <div className='flex h-24 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
              <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
            </div>
            <div className='flex flex-col gap-4 p-4 '>
              <div className=' text-2xl font-medium text-white'>First Casino</div>
              <div className=' text-base font-medium text-white'>⭐ ⭐ ⭐ ⭐ ⭐ 5.0</div>
            </div>
          </div>
          <div className='flex p-2'>
            <Button className='rounded-3xl'>Claim bonus</Button>
          </div>
        </div>

        <div className='flex flex-col   gap-4 md:flex-row md:justify-between'>
          <div className='flex  flex-col space-y-4 rounded-3xl border p-4 md:w-4/5'>
            <div className='flex w-full justify-end'>
              <div className='flex w-7 rounded-3xl bg-[#98C743]'>4.9</div>
            </div>
            <div className=' text-2xl font-medium text-white'>Casino review</div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </span>
          </div>

          <div className='flex  flex-col justify-center rounded-3xl border p-4'>
            <div>✔️ Nice free bonus</div>
            <div>✔️ Nice free bonus</div>
            <div>✔️ Nice free bonus</div>
            <div>✔️ Nice free bonus</div>
            <div>✔️ Nice free bonus</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
