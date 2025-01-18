"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { toast } from "react-toastify"

import { AUTH_URL } from "@/config/constants"

const EmailVerificationView = ({ email }: { email: string }): React.JSX.Element => {
  const router = useRouter()
  const { status } = useSession()
  const [countdown, setCountdown] = React.useState<number>(0)
  const [isCountdownFinished, setIsCountdownFinished] = React.useState<boolean>(true)

  async function handleResendClick() {
    if (!isCountdownFinished) return

    toast
      .promise(
        signIn("email", {
          email: email,
          redirect: false,
          callbackUrl: "/"
        }),
        {
          pending: "Sending verification email ...",
          success: `A verification link has been sent to ${email}`,
          error: "Could not send email."
        }
      )
      .then(() => {
        setIsCountdownFinished(false)
        setCountdown(30)

        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1)
        }, 1000)

        setTimeout(() => {
          clearInterval(interval)
          setIsCountdownFinished(true)
        }, 30000)
      })
  }

  React.useEffect(() => {
    if (status === "authenticated") {
      router.push("/")
    }
  }, [router, status])

  return (
    <div className='flex max-w-md flex-col gap-4 rounded-xl border bg-card px-8 py-12'>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Check your email</h1>
          <h1 className='text-sm font-semibold tracking-tight text-gray-500'>to continue to {AUTH_URL.slice(8)}</h1>
        </div>

        <div>
          <h1 className='text-xs font-semibold tracking-tight text-gray-500 '>
            Keep this window open and in a new tab open the link we just sent to {email}
          </h1>
        </div>

        <div className='flex items-center gap-2'>
          <h1
            className={`cursor-default text-xs font-semibold tracking-tight text-artdevium-azure ${
              isCountdownFinished && "hover:cursor-pointer hover:underline"
            } ${!isCountdownFinished && "opacity-50"}`}
            onClick={handleResendClick}
          >
            Did not receive a code? Resend {countdown > 0 && `(${countdown})`}
          </h1>
        </div>
      </div>
    </div>
  )
}

export { EmailVerificationView }
