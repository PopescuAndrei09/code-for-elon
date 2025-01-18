import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

import { db } from "@ssp/db"
import { Alert } from "@ssp/ui"

import { siteMetadata } from "@/components/metadata"
import { ResetPasswordForm } from "./reset-password-form"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Reset Password`
}

const ResetPasswordPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<React.JSX.Element> => {
  if (searchParams.token === undefined || !(typeof searchParams.token === "string")) {
    return redirect("/")
  }
  const token = await db.resetPasswordToken.findFirst({
    where: { id: searchParams.token as string }
  })
  if (!token) {
    return redirect("/")
  }

  return token.expiresAt < new Date() || token.used ? (
    <Alert variant='destructive' className='max-w-2xl text-center'>
      This token has expired, please{" "}
      <Link href={"/forgot-password"} className='text-artdevium-azure hover:underline'>
        request another one
      </Link>
      .
    </Alert>
  ) : (
    <ResetPasswordForm token={token.id} />
  )
}

export default ResetPasswordPage
