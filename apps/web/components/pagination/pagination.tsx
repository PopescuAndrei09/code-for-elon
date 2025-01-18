import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"

import { Button } from "@ssp/ui"

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}): React.JSX.Element => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
  const handleLast = () => {
    onPageChange(totalPages)
  }
  const handleFirst = () => {
    onPageChange(1)
  }
  return (
    <div className='flex items-center justify-center py-8'>
      <div className='flex items-center space-x-6 lg:space-x-8'>
        <div className='flex items-center space-x-2 bg-card'>
          <Button variant='outline' className='h-8 w-8 p-0' onClick={handleFirst}>
            <span className='sr-only'>Go to first page</span>
            <DoubleArrowLeftIcon className='h-4 w-4' />
          </Button>
          <Button variant='outline' className='h-8 w-8 p-0' onClick={handlePrevious}>
            <span className='sr-only'>Go to previous page</span>
            <ChevronLeftIcon className='h-4 w-4' />
          </Button>
          <Button variant='outline' className='h-8 w-8 p-0' onClick={handleNext}>
            <span className='sr-only'>Go to next page</span>
            <ChevronRightIcon className='h-4 w-4' />
          </Button>
          <Button variant='outline' className='h-8 w-8 p-0' onClick={handleLast}>
            <span className='sr-only'>Go to last page</span>
            <DoubleArrowRightIcon className='h-4 w-4' />
          </Button>
        </div>
        <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  )
}

export { Pagination }
