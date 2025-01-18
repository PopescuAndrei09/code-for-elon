"use client"

import * as React from "react"
import { toast } from "react-toastify"
import type * as z from "zod"

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, useZodForm } from "@ssp/ui"
import { generalSettingSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

type FeaturesFormValues = z.infer<typeof generalSettingSchema>
const FeatureAddForm = () => {
  const [isLoading, startTransition] = React.useTransition()

  const form = useZodForm({ schema: generalSettingSchema, defaultValues: { type: "" } })
  const CreateNewFeature = clientApi.features.create.useMutation({
    onSuccess: () => {
      toast.success("Your feature was created successfully. 🎉")
      location.reload()
    }
  })

  const onSubmit = (data: FeaturesFormValues) => {
    startTransition(async () => {
      try {
        CreateNewFeature.mutate({ type: data.type })
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-1/2 items-center gap-8'>
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feature</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Add Feature
        </Button>
      </form>
    </Form>
  )
}

export { FeatureAddForm }
