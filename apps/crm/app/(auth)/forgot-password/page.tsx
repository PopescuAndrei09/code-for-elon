import * as React from "react"
import type { Metadata } from "next"

import { siteMetadata } from "@/components/metadata"
import { ForgotPasswordForm } from "./forgot-password-form"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Forgot Password`
}

const ForgotPasswordPage = (): React.JSX.Element => {
  return <ForgotPasswordForm />
}

export default ForgotPasswordPage
