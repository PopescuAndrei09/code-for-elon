import * as React from "react"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Toaster = (): React.JSX.Element => {
  return (
    <ToastContainer
      className='mr-16'
      bodyStyle={{
        fontFamily: "var(--font-sora)"
      }}
      position='bottom-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme='dark'
      style={{
        minWidth: "400px"
      }}
    />
  )
}

export { Toaster }
