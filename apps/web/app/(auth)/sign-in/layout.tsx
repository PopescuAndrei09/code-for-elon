import * as React from "react"

const SignInLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return <div className='flex grow items-center justify-center'>{children}</div>
}

export default SignInLayout
