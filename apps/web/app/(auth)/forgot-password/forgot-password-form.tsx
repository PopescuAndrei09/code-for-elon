"use client"

import * as React from "react"
import Link from "next/link"
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
import { forgotPasswordSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { AUTH_URL } from "@/config/constants"
import { clientApi } from "@/trpc/client"

const ForgotPasswordForm = () => {
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  const form = useZodForm({ schema: forgotPasswordSchema, defaultValues: { email: "", url: AUTH_URL } })

  const sendForgotEmail = clientApi.user.sendForgotPasswordEmail.useMutation({
    onSuccess: async () => {
      setSuccess(true)
      toast.info(`A reset link has been sent to ${form.getValues("email")}`)
    }
  })

  const handleSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    setSuccess(false)
    setError("")
    startTransition(async () => {
      try {
        await sendForgotEmail.mutateAsync(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    })
  }

  return (
    <Form {...form}>
      <div className='flex w-96 flex-col gap-4 rounded-xl border bg-card px-8 py-12'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Trouble logging in?</h1>
          <h1 className='text-sm font-semibold tracking-tight text-gray-500'>
            Enter your email and we&apos;ll send you a link to get back into your account.
          </h1>
        </div>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input autoComplete='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormItem className='hidden'>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input autoComplete='url' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <Alert variant='destructive'>{error}</Alert>}
          {success && (
            <Alert variant='default'>
              An email has been sent to your inbox with instructions to reset your password.
            </Alert>
          )}
          <Button
            variant='white'
            type='submit'
            className='w-full'
            disabled={isLoading}
            // onClick={form.handleSubmit(handleSubmit)}
          >
            {isLoading ? <Icons.spinner className='mr-2 h-4 w-4 animate-spin' /> : "Reset password"}
          </Button>
        </form>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2'>Or</span>
          </div>
        </div>
        <Button variant='link' type='button' disabled={isLoading} className='w-full' asChild>
          <Link href='/sign-up'>Create new account</Link>
        </Button>
        <Button variant='link' type='button' disabled={isLoading} className='w-full' asChild>
          <Link href='/sign-in'>Back to login</Link>
        </Button>
      </div>
    </Form>
  )
}

export { ForgotPasswordForm }
