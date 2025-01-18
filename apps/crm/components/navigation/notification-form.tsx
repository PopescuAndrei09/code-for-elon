"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type * as z from "zod"

import "@/styles/account-form.css"

import { NotificationFormSchema } from "@ssp/utils"

import "react-phone-number-input/style.css"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { toast } from "react-toastify"

import {
  Alert,
  Button,
  cn,
  Command,
  CommandGroup,
  CommandItem,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from "@ssp/ui"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

type NotificationFormValues = z.infer<typeof NotificationFormSchema>

const NotificationAddForm = ({
  setOpenDialogAdd
}: {
  setOpenDialogAdd: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  const types = [
    { label: "Bonus", value: "bonus" },
    { label: "Info", value: "info" },
    { label: "Success", value: "success" },
    { label: "Error", value: "error" },
    { label: "Warning", value: "warning" }
  ] as const

  const defaultValues: Partial<NotificationFormValues> = {
    type: undefined,
    title: "",
    message: "",
    href: ""
  }

  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(NotificationFormSchema),
    defaultValues
  })
  const utils = clientApi.useUtils()
  const createNotification = clientApi.notification.createNotification.useMutation({
    onSuccess: () => {
      toast.success("Your account details have been updated successfully. 🎉")
      setOpenDialogAdd(false)
      utils.notification.getNotifications.invalidate()
    }
  })

  const onSubmit = (data: NotificationFormValues) => {
    setError("")
    startTransition(async () => {
      try {
        await createNotification.mutateAsync(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col space-y-8'>
        <div className='flex w-full justify-center gap-10'>
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-2'>
                <FormLabel>Notification type</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        role='combobox'
                        className={cn("h-10 min-w-[350px] justify-between", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? types.find((type) => type.value === field.value)?.label : "Select type"}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] p-0'>
                    <Command>
                      <CommandGroup>
                        {types.map((type) => (
                          <CommandItem
                            value={type.label}
                            key={type.value}
                            onSelect={() => {
                              form.setValue("type", type.value)
                            }}
                          >
                            <CheckIcon
                              className={cn("mr-2 h-4 w-4", type.value === field.value ? "opacity-100" : "opacity-0")}
                            />
                            {type.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className=' w-full'>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type='text' {...field} className=' w-full' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field}></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='href'
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
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
          Add advert
        </Button>
      </form>
    </Form>
  )
}

export { NotificationAddForm }
