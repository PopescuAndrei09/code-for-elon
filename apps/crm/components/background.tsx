import * as React from "react"

const Background = (): React.JSX.Element => {
  return (
    <div className='absolute -inset-40 left-0 top-0 -z-30 h-full'>
      <div className='background-grid h-full animate-pulse bg-[length:6rem_6rem]' />
    </div>
  )
}

export { Background }
