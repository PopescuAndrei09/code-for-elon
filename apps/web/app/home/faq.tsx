import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export const Faq = () => {
  const [isFaqCollapsed, setIsFaqCollapsed] = React.useState<boolean>(true)

  const toggleFaqCollapse = () => {
    setIsFaqCollapsed(!isFaqCollapsed)
  }

  return (
    <div className='flex flex-col items-center justify-center space-y-10'>
      <div className='text-center text-[40px] font-semibold text-white'>Frequently asked questions</div>
      <div className='container flex flex-col rounded-3xl border p-2'>
        <div className='flex flex-row justify-between' onClick={toggleFaqCollapse}>
          <div className='text-gray-600'>Is this a question here?</div>
          {isFaqCollapsed ? (
            <ChevronDown className='cursor-pointer items-end' />
          ) : (
            <ChevronUp className='cursor-pointer' />
          )}
        </div>
        {!isFaqCollapsed && (
          <div className='mt-4 flex items-center justify-center'>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur.
          </div>
        )}
      </div>

      <div className='container flex flex-col rounded-3xl border p-2'>
        <div className='flex flex-row justify-between'>
          <div className='text-gray-600'>Is this a question here?</div>
          {isFaqCollapsed ? (
            <ChevronDown className='cursor-pointer items-end' />
          ) : (
            <ChevronUp className='cursor-pointer' />
          )}
        </div>
      </div>

      <div className='container flex flex-col rounded-3xl border p-2'>
        <div className='flex flex-row justify-between'>
          <div className='text-gray-600'>Is this a question here?</div>
          {isFaqCollapsed ? (
            <ChevronDown className='cursor-pointer items-end' />
          ) : (
            <ChevronUp className='cursor-pointer' />
          )}
        </div>
      </div>

      <div className='container flex flex-col rounded-3xl border p-2'>
        <div className='flex flex-row justify-between'>
          <div className='text-gray-600'>Is this a question here?</div>
          {isFaqCollapsed ? (
            <ChevronDown className='cursor-pointer items-end' />
          ) : (
            <ChevronUp className='cursor-pointer' />
          )}
        </div>
      </div>

      <div className='container flex flex-col rounded-3xl border p-2'>
        <div className='flex flex-row justify-between'>
          <div className='text-gray-600'>Is this a question here?</div>
          {isFaqCollapsed ? (
            <ChevronDown className='cursor-pointer items-end' />
          ) : (
            <ChevronUp className='cursor-pointer' />
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq
