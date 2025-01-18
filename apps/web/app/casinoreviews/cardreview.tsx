import React from "react"
import Image from "next/image"

import { Button } from "@ssp/ui"

const CardReview = (): React.JSX.Element => {
  return (
    <div className='container flex w-full flex-col justify-between md:flex-row'>
      <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-2'>
        <div className='flex flex-col items-center gap-16 '>
          <div className='grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-1 lg:grid-cols-2'>
            <div className='w-[350px] rounded-3xl border'>
              <div className='flex flex-row'>
                <div className='flex h-56 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
                  <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
                </div>
                <div className='flex flex-col gap-4 p-4 '>
                  <div className=' text-2xl font-medium text-white'>First Casino</div>
                  <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                  <div className=' text-base font-medium text-white'>🎁 Bonus: 100% money</div>
                  <div className='flex gap-4'>
                    <Button>Visit Casino</Button>
                    <Button className='bg-white'>Read review</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[350px] rounded-3xl border'>
              <div className='flex flex-row'>
                <div className='flex h-56 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
                  <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
                </div>
                <div className='flex flex-col gap-4 p-4 '>
                  <div className=' text-2xl font-medium text-white'>First Casino</div>
                  <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                  <div className=' text-base font-medium text-white'>🎁 Bonus: 100% money</div>
                  <div className='flex gap-4'>
                    <Button>Visit Casino</Button>
                    <Button className='bg-white'>Read review</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[350px] rounded-3xl border'>
              <div className='flex flex-row'>
                <div className='flex h-56 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
                  <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
                </div>
                <div className='flex flex-col gap-4 p-4 '>
                  <div className=' text-2xl font-medium text-white'>First Casino</div>
                  <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                  <div className=' text-base font-medium text-white'>🎁 Bonus: 100% money</div>
                  <div className='flex gap-4'>
                    <Button>Visit Casino</Button>
                    <Button className='bg-white'>Read review</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[350px] rounded-3xl border'>
              <div className='flex flex-row'>
                <div className='flex h-56 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
                  <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
                </div>
                <div className='flex flex-col gap-4 p-4 '>
                  <div className=' text-2xl font-medium text-white'>First Casino</div>
                  <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                  <div className=' text-base font-medium text-white'>🎁 Bonus: 100% money</div>
                  <div className='flex gap-4'>
                    <Button>Visit Casino</Button>
                    <Button className='bg-white'>Read review</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[350px] rounded-3xl border'>
              <div className='flex flex-row'>
                <div className='flex h-56 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
                  <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
                </div>
                <div className='flex flex-col gap-4 p-4 '>
                  <div className=' text-2xl font-medium text-white'>First Casino</div>
                  <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                  <div className=' text-base font-medium text-white'>🎁 Bonus: 100% money</div>
                  <div className='flex gap-4'>
                    <Button>Visit Casino</Button>
                    <Button className='bg-white'>Read review</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[350px] rounded-3xl border'>
              <div className='flex flex-row'>
                <div className='flex h-56 w-14 items-center justify-center rounded-3xl bg-[#98C743]'>
                  <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
                </div>
                <div className='flex flex-col gap-4 p-4 '>
                  <div className=' text-2xl font-medium text-white'>First Casino</div>
                  <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
                  <div className=' text-base font-medium text-white'>🎁 Bonus: 100% money</div>
                  <div className='flex gap-4'>
                    <Button>Visit Casino</Button>
                    <Button className='bg-white'>Read review</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Pagination
        currentPage={page}
        totalPages={Math.ceil((data?.length || 0) / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      /> */}
          <div>Pagination</div>
        </div>
      </div>

      <div>adv</div>
    </div>
  )
}

export default CardReview
