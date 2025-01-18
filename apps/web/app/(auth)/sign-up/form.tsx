"use client"

import * as React from "react"
import Link from "next/link"
import { TRPCError } from "@trpc/server"
import { signIn } from "next-auth/react"
import PhoneInput from "react-phone-number-input"
import { toast } from "react-toastify"
import type { z } from "zod"

import "react-phone-number-input/style.css"

import {
  Alert,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useZodForm
} from "@ssp/ui"
import { signupSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { AUTH_URL } from "@/config/constants"
import { clientApi } from "@/trpc/client"
import { EmailVerificationView } from "../email-verification"

const UserSignUpForm = (): React.JSX.Element => {
  const [isLoading, startTransition] = React.useTransition()
  const [error, setError] = React.useState<string>("")
  const [tokenSent, setTokenSent] = React.useState<boolean>(false)
  const form = useZodForm({ schema: signupSchema, defaultValues: { email: "", password: "" } })

  const createUser = clientApi.user.createUser.useMutation({
    onSuccess: async () => {
      const res = await signIn("email", {
        email: form.getValues("email"),
        redirect: false,
        callbackUrl: "/"
      })

      toast.info(`A verification link has been sent to ${form.getValues("email")}`)

      if (res?.error) {
        setError(res.error)
        return
      }

      setTokenSent(true)
    }
  })

  async function handleSubmit(data: z.infer<typeof signupSchema>) {
    setError("")
    startTransition(async () => {
      try {
        await createUser.mutateAsync(data)
      } catch (error) {
        if (error instanceof Error || error instanceof TRPCError) {
          setError(error.message)
        }
      }
    })
  }

  return !tokenSent ? (
    <Form {...form}>
      <div className='flex max-w-md flex-col gap-4 rounded-xl border bg-card px-8 py-12'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Create your account</h1>
          <h1 className='text-sm font-semibold tracking-tight text-gray-500'>to continue to {AUTH_URL.slice(8)}</h1>
        </div>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type='text' autoComplete='given-name' placeholder='John' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type='text' autoComplete='family-name' placeholder='Doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' autoComplete='email' placeholder='yourname@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput
                      international
                      inputComponent={Input}
                      limitMaxLength={true}
                      placeholder='+1 234 567 8900'
                      {...field}
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      autoComplete='new-password'
                      placeholder='Must be at least 6 characters'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className=''>
                    By signing up, you agree to our&nbsp;
                    <Link href={"/terms"} className='text-artdevium-azure underline'>
                      Terms
                    </Link>
                    &nbsp;and confirm that you have read our&nbsp;
                    <Link href={"/privacy-policy"} className='text-artdevium-azure underline'>
                      Privacy Policy
                    </Link>
                    &nbsp;and&nbsp;
                    <Link href={"/cookie-policy"} className='text-artdevium-azure underline'>
                      Cookies Policy
                    </Link>
                    .
                  </FormDescription>
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
            <span className='text-muted-foreground bg-background px-2'>Or register with</span>
          </div>
        </div>

        <Button
          variant='white'
          type='button'
          disabled={isLoading}
          // onClick={() => signIn("google", { callbackUrl: AUTH_URL })}
          className='w-full bg-sky-600 hover:bg-sky-600 hover:text-white'
        >
          {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.google className='mr-2 h-4 w-4' />
          )}
          Google
        </Button>

        <div className='flex flex-row items-center gap-1'>
          <h1 className='text-xs font-semibold tracking-tight text-gray-500'>Have an account?</h1>
          <Link className='text-xs font-semibold tracking-tight text-artdevium-azure hover:underline' href={"/sign-in"}>
            Sign in
          </Link>
        </div>
      </div>
    </Form>
  ) : (
    <EmailVerificationView email={form.getValues("email")} />
  )
}

export { UserSignUpForm }
