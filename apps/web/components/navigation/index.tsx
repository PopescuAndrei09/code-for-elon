"use client"

import * as React from "react"

import { DesktopNavigation } from "./desktop"
import { MobileNavigation } from "./mobile"

const NavigationBar = (): React.JSX.Element => {
  return (
    <nav className=' relative mx-auto bg-background  bg-cover bg-bottom bg-no-repeat'>
      <div className='container flex w-full flex-col p-4'>
        <DesktopNavigation />
        <MobileNavigation />
        {/* <div
          className='flex-start mt-4 flex flex-col items-start gap-4  bg-cover bg-bottom bg-no-repeat p-8 lg:mt-8'
          style={{
            backgroundImage: `url('/images/wave2.svg')`
          }}
        >
          <div className='text-2xl font-medium text-white text-opacity-70'>Stiri si pacanele</div>
          <div>
            <span className=' text-[80px] font-semibold leading-[90px] text-white'>
              Bine ai venit!
              <br />
            </span>
            <span className="font-['Inter Display'] text-[80px] font-semibold leading-[90px] text-lime-400">CTA</span>
          </div>
          <div className='text-base font-normal text-white text-opacity-70'>
            Play it safe, play it fair, play it here.
          </div>
          <Button variant='yellow' className='rounded-full'>
            Start
          </Button>
        </div> */}
      </div>
    </nav>
  )
}

export { NavigationBar }
