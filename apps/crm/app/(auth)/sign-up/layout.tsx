import * as React from "react"

const SignUpLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return <div className='flex grow items-center justify-center'>{children}</div>
}

export default SignUpLayout
