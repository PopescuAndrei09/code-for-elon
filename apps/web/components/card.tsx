import React from "react"
import Image from "next/image"

const Card = (): React.JSX.Element => {
  return (
    <div className='w-60  border lg:m-0'>
      <div className='flex h-20 w-full items-center justify-center rounded-3xl bg-[#98C743]'>
        <Image width={40} height={40} src='/icons/cardIcon.svg' alt='' />
      </div>
      <div className='flex flex-col gap-2 p-4 '>
        <div className=' text-2xl font-medium text-white'>First Casino</div>
        <div className=' text-base font-normal text-white text-opacity-70'>Get up to 2000$ + 10 spins</div>
        <div className=' text-base font-medium text-white'> &#11088;&#11088;&#11088;&#11088;&#11088; 5.0</div>
        <div className='inline-flex  items-center justify-center gap-2.5 rounded-full bg-yellow-300 px-8 py-3.5'>
          <div className=' text-base font-medium text-stone-900'>Play now</div>
        </div>
        <div className="font-['Inter Display'] text-center text-base font-medium text-white underline">
          Check review
        </div>
      </div>
    </div>
  )
}

export default Card
