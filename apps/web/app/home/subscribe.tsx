import React from "react"
import Image from "next/image"

import { Button, Input } from "@ssp/ui"

const Subscribe = () => {
  return (
    <div className='mt-20 w-full bg-accent'>
      <div className='container relative flex h-40 flex-row flex-wrap justify-between  p-4'>
        <div className='flex flex-col space-y-4'>
          <div className='text-center   text-4xl font-semibold text-white md:text-5xl '>
            Subscribe to our newsletter
          </div>
          <div className='relative flex w-full flex-col flex-wrap rounded-3xl md:flex-row'>
            <Input className=' h-11 rounded-3xl border-white' placeholder='Subscribe to our newsletter' type='email' />
            <Button className='absolute right-[10px] top-[3px] rounded-lg p-2' type='submit'>
              Subscribe
            </Button>
          </div>
        </div>
        <div className='absolute bottom-10 right-0 top-[-150px]  lg:top-[-130px]'>
          <Image src={"/images/albina.png"} alt='albina' width={150} height={150} />
        </div>
      </div>
    </div>
  )
}

export { Subscribe }
