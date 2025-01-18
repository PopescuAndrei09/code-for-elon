"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import type { z } from "zod"

import {
  Alert,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useZodForm
} from "@ssp/ui"
import { loginSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { AUTH_URL } from "@/config/constants"
import { EmailVerificationView } from "../email-verification"

const UserSignInForm = (): React.JSX.Element => {
  const [tokenSent, setTokenSent] = React.useState<boolean>(false)
  const [isLoading, startTransition] = React.useTransition()
  const [error, setError] = React.useState<string>("")
  const router = useRouter()

  const form = useZodForm({ schema: loginSchema, defaultValues: { email: "", password: "" } })

  const loginWithCredentials = (data: z.infer<typeof loginSchema>) => {
    setError("")
    startTransition(async () => {
      const res = await signIn<"credentials">("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "/"
      })

      if (res?.error === "Email not verified.") {
        setError(res.error)
        toast
          .promise(
            signIn("email", {
              email: form.getValues("email"),
              redirect: false,
              callbackUrl: "/"
            }),
            {
              pending: "Sending verification email ...",
              success: `A verification link has been sent to ${form.getValues("email")}`,

              error: "Could not send email."
            }
          )
          .then(() => {
            setTokenSent(true)
          })

        return
      }

      if (res?.error) {
        setError(res.error)
        return
      }

      router.push("/")
    })
  }

  const loginWithGoogle = (): void => {
    setError("")
    startTransition(async () => {
      const res = await signIn("google", {
        redirect: false,
        callbackUrl: "/"
      })
      if (res?.error) {
        setError(res.error)
        return
      }

      router.push("/")
    })
  }

  React.useEffect(() => {
    form.setFocus("email")
  }, [form])

  return !tokenSent ? (
    <Form {...form}>
      <div className='flex w-96 flex-col gap-4 rounded-xl border bg-card px-8 py-12'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Sign in</h1>
          <h1 className='text-sm font-semibold tracking-tight text-gray-500'>to continue to {AUTH_URL.slice(8)}</h1>
        </div>

        <form onSubmit={form.handleSubmit(loginWithCredentials)} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2 '>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' autoComplete='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <div className='flex justify-between'>
                    <FormLabel>Password</FormLabel>
                    <FormLabel className='text-artdevium-azure hover:underline'>
                      <Link href={"/forgot-password"}>Forgot Password?</Link>
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Input type='password' autoComplete='new-password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {error && <Alert variant='destructive'>{error}</Alert>}
          <Button disabled={isLoading} variant='white' type='submit' className='w-full'>
            {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            CONTINUE
          </Button>
        </form>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2'>Or authenticate with</span>
          </div>
        </div>

        <Button
          variant='white'
          type='button'
          disabled={isLoading}
          onClick={loginWithGoogle}
          className='bg-artdevium-azure hover:bg-artdevium-azure/80 hover:text-white'
        >
          {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.google className='mr-2 h-4 w-4' />
          )}
          Google
        </Button>

        <div className='flex flex-row items-center gap-1'>
          <h1 className='text-xs font-semibold tracking-tight text-gray-500'>No account?</h1>

          <Link className='text-xs font-semibold tracking-tight text-artdevium-azure hover:underline' href={"/sign-up"}>
            Sign up
          </Link>
        </div>
      </div>
    </Form>
  ) : (
    <EmailVerificationView email={form.getValues("email")} />
  )
}

export { UserSignInForm }
