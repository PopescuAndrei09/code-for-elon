"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"

import "@/styles/account-form.css"

import type { GameWithReqForCreateSchema } from "@ssp/utils"
import { GameWithReqSchema } from "@ssp/utils"

import "react-phone-number-input/style.css"

// import { parse } from "path"
import { toast } from "react-toastify"

import {
  Alert,
  Button,
  Calendar,
  cn,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@ssp/ui"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

const formSchema = z.object({
  type: z.string()
})
type VolatilityFormValues = z.infer<typeof formSchema>
const VolatilityAddForm = ({
  setOpenDialogAdd
}: {
  setOpenDialogAdd: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  const form = useForm<VolatilityFormValues>({
    resolver: zodResolver(formSchema)
  })

  const CreateNewVolatility = clientApi.volatility.create.useMutation({
    onSuccess: () => {
      toast.success("Your volatility was created successfully. 🎉")
      setOpenDialogAdd(false)
      location.reload()
    }
  })

  const onSubmit = (data: VolatilityFormValues) => {
    setError("")
    startTransition(async () => {})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-1/2 gap-8'>
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Volatility</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <Alert variant='destructive'>{error}</Alert>}
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Add Volatility
        </Button>
      </form>
    </Form>
  )
}

export { VolatilityAddForm }
