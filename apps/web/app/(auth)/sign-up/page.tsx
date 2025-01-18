import * as React from "react"
import type { Metadata } from "next"

import { siteMetadata } from "@/components/metadata"
import { UserSignUpForm } from "./form"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Sign Up`
}

const SignUpPage = (): React.JSX.Element => {
  return <UserSignUpForm />
}

export default SignUpPage
