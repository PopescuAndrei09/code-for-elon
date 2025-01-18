import React from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@ssp/ui"

export const Slotsinfo = () => {
  const [isInfoCollapsed, setIsInfoCollapsed] = React.useState<boolean>(true)

  const toggleIsInfoCollapse = () => {
    setIsInfoCollapsed(!isInfoCollapsed)
  }

  return (
    <div className='blur-bg flex flex-col gap-2 rounded-2xl border p-4'>
      <div className='flex flex-col rounded-2xl bg-border p-2 '>
        <div className='flex flex-col items-center justify-between overflow-auto md:flex-row'>
          <div className='flex flex-col items-center gap-4 md:flex-row'>
            <span>1</span>
            <Image src={"/images/Frame1.png"} alt='betano' width={150} height={150} />
          </div>
          <div className='flex flex-col items-center text-center  lg:ml-0'>
            <span>Superbet</span>
            <span>🎁 Bonus 100% money</span>
          </div>
          <div className='flex flex-col-reverse gap-4 md:flex md:flex-row'>
            <div onClick={toggleIsInfoCollapse}>
              <Button>
                Quick Info
                {isInfoCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end' />
                ) : (
                  <ChevronUp className='cursor-pointer' />
                )}
              </Button>
            </div>
            <Button className='bg-destructive text-white'>Play Casino</Button>
          </div>
        </div>
        <div className='px-4'>
          {!isInfoCollapsed && (
            <div className='flex gap-2 rounded-2xl bg-border p-2' onClick={(e) => e.stopPropagation()}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </span>
            </div>
          )}
        </div>
      </div>

      <div className='flex w-full flex-col  items-center justify-between space-y-4 rounded-2xl bg-border p-2 md:flex-row md:space-y-0'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <span>2</span>
          <Image src={"/images/Frame2.png"} alt='betano' width={150} height={150} />
        </div>
        <div className='flex flex-col items-center text-center  lg:ml-0'>
          <span>Superbet</span>
          <span>🎁 Bonus 100% money</span>
        </div>
        <div className='flex flex-col-reverse gap-4 md:flex md:flex-row'>
          <div>
            <Button>
              Quick Info
              {isInfoCollapsed ? (
                <ChevronDown className='cursor-pointer items-end' />
              ) : (
                <ChevronUp className='cursor-pointer' />
              )}
            </Button>
          </div>
          <Button className='bg-destructive text-white'>Play Casino</Button>
        </div>
      </div>

      <div className='flex w-full flex-col  items-center justify-between space-y-4 rounded-2xl bg-border p-2 md:flex-row md:space-y-0'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <span>3</span>
          <Image src={"/images/Frame3.png"} alt='betano' width={150} height={150} />
        </div>
        <div className='flex flex-col items-center text-center  lg:ml-0'>
          <span>Superbet</span>
          <span>🎁 Bonus 100% money</span>
        </div>
        <div className='flex flex-col-reverse gap-4 md:flex md:flex-row'>
          <div>
            <Button>
              Quick Info
              {isInfoCollapsed ? (
                <ChevronDown className='cursor-pointer items-end' />
              ) : (
                <ChevronUp className='cursor-pointer' />
              )}
            </Button>
          </div>
          <Button className='bg-destructive text-white'>Play Casino</Button>
        </div>
      </div>

      <div className='flex w-full flex-col  items-center justify-between space-y-4 rounded-2xl bg-border p-2 md:flex-row md:space-y-0'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <span>4</span>
          <Image src={"/images/Frame4.png"} alt='betano' width={150} height={150} />
        </div>
        <div className='flex flex-col items-center text-center  lg:ml-0'>
          <span>Superbet</span>
          <span>🎁 Bonus 100% money</span>
        </div>
        <div className='flex flex-col-reverse gap-4 md:flex md:flex-row'>
          <div>
            <Button>
              Quick Info
              {isInfoCollapsed ? (
                <ChevronDown className='cursor-pointer items-end' />
              ) : (
                <ChevronUp className='cursor-pointer' />
              )}
            </Button>
          </div>
          <Button className='bg-destructive text-white'>Play Casino</Button>
        </div>
      </div>

      <div className='flex w-full flex-col  items-center justify-between space-y-4 rounded-2xl bg-border p-2 md:flex-row md:space-y-0'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <span>5</span>
          <Image src={"/images/Frame2.png"} alt='betano' width={150} height={150} />
        </div>
        <div className='flex flex-col items-center text-center  lg:ml-0'>
          <span>Superbet</span>
          <span>🎁 Bonus 100% money</span>
        </div>
        <div className='flex flex-col-reverse gap-4 md:flex md:flex-row'>
          <div>
            <Button>
              Quick Info
              {isInfoCollapsed ? (
                <ChevronDown className='cursor-pointer items-end' />
              ) : (
                <ChevronUp className='cursor-pointer' />
              )}
            </Button>
          </div>
          <Button className='bg-destructive text-white'>Play Casino</Button>
        </div>
      </div>
    </div>
  )
}

export default Slotsinfo
