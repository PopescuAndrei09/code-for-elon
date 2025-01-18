import * as React from "react"
import { ThreeCircles } from "react-loader-spinner"

const Loading = (props: { width: string; height: string }): React.JSX.Element => {
  return (
    <div className='flex items-center justify-center p-6'>
      <ThreeCircles
        height={props.height}
        width={props.width}
        color='#f7a418'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='three-circles-rotating'
        outerCircleColor=''
        innerCircleColor=''
        middleCircleColor=''
      />
    </div>
  )
}

export { Loading }
