"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import type * as z from "zod"

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
  RadioGroup,
  RadioGroupItem,
  Switch
} from "@ssp/ui"
import { accountFormSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"

type AccountFormValues = z.infer<typeof accountFormSchema>

const NotificationsForm = ({ me }: { me: Awaited<ReturnType<(typeof serverApi)["user"]["me"]["query"]>> }) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  // This can come from your database or API.
  const defaultValues: Partial<AccountFormValues> = {
    id: me.id,
    notificationsAllowed: me.notificationsAllowed ?? "all",
    isMarketingEnabled: me.isMarketingEnabled ?? true
  }

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues
  })

  const utils = clientApi.useUtils()

  const updateNotificationSettings = clientApi.user.updateMe.useMutation({
    onSuccess: () => {
      toast.success("Your notification settings have been updated successfully. 🎉")
      utils.user.me.invalidate()
    }
  })

  const onSubmit = (data: AccountFormValues) => {
    setError("")
    startTransition(async () => {
      try {
        await updateNotificationSettings.mutateAsync(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='notificationsAllowed'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='all' />
                    </FormControl>
                    <FormLabel className='font-normal'>All activity</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='important' />
                    </FormControl>
                    <FormLabel className='font-normal'>Only important activity</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='none' />
                    </FormControl>
                    <FormLabel className='font-normal'>Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <h3 className='mb-4 text-lg font-medium'>Email Notifications</h3>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='isMarketingEnabled'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Marketing emails</FormLabel>
                    <FormDescription>Receive emails about new products, features, and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='isMarketingEnabled'
              render={() => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Security emails</FormLabel>
                    <FormDescription>
                      Receive emails about your account suspicious activity and security.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={true} disabled aria-readonly />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        {error && <Alert variant='destructive'>{error}</Alert>}
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Update notifications
        </Button>
      </form>
    </Form>
  )
}

export { NotificationsForm }
