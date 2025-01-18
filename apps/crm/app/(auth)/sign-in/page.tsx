import * as React from "react"
import type { Metadata } from "next"

import { siteMetadata } from "@/components/metadata"
import { UserSignInForm } from "./form"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Sign In`
}

const SignInPage = (): React.JSX.Element => {
  return <UserSignInForm />
}

export default SignInPage
