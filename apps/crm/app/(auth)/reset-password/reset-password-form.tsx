"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
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
import { resetPasswordSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

const ResetPasswordForm = ({ token }: { token: string }) => {
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  const router = useRouter()

  const form = useZodForm({
    schema: resetPasswordSchema,
    defaultValues: { password: "", confirmPassword: "", token: token }
  })

  const updatePassword = clientApi.user.updatePassword.useMutation({
    onSuccess: () => {
      toast.success("Your password has been updated successfully.")
      setSuccess(true)
      form.reset()
      router.push("/sign-in")
    }
  })

  async function handleSubmit(data: z.infer<typeof resetPasswordSchema>) {
    setSuccess(false)
    setError("")
    startTransition(async () => {
      try {
        await updatePassword.mutateAsync(data)
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
          <h1 className='text-2xl font-semibold tracking-tight'>Reset password</h1>
        </div>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-3 py-2'>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input type='password' autoComplete='new-password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm new password</FormLabel>
                <FormControl>
                  <Input autoComplete='off' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <Alert variant='destructive'>{error}</Alert>}
          <Button type='submit' className='w-full' disabled={success}>
            {isLoading ? <Icons.spinner className='mr-2 h-4 w-4 animate-spin' /> : "Reset password"}
          </Button>
        </form>
      </div>
    </Form>
  )
}

export { ResetPasswordForm }
