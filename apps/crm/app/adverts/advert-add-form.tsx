"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import type * as z from "zod"

import "@/styles/account-form.css"

import type { AdvertSchemaWithSpacesForCreate } from "@ssp/utils"
import { AdvertSchemaWithSpacesForm } from "@ssp/utils"

import "react-phone-number-input/style.css"

import { toast } from "react-toastify"

import {
  Alert,
  Button,
  Calendar,
  Checkbox,
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
  PopoverTrigger,
  Textarea
} from "@ssp/ui"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

type AdvertFormValues = z.infer<typeof AdvertSchemaWithSpacesForm>

const AdvertAddForm = ({ setOpenDialogAdd }: { setOpenDialogAdd: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  const defaultValues: Partial<AdvertFormValues> = {
    href: "",
    title: "",
    description: "",
    image: "",
    promoCode: "",
    isEnabled: true,
    from: new Date(Date.now()),
    to: new Date(Date.now()),
    advertSpaces: {
      pageArray: "",
      page: [],
      secondary: false
    }
  }
  const form = useForm<AdvertFormValues>({
    resolver: zodResolver(AdvertSchemaWithSpacesForm),
    defaultValues
  })

  const CreateAdvert = clientApi.advert.create.useMutation({
    onSuccess: () => {
      toast.success("Your account details have been updated successfully. 🎉")
      setOpenDialogAdd(false)
      location.reload()
    }
  })

  const onSubmit = (data: AdvertFormValues) => {
    const { advertSpaces, ...rest } = data
    setError("")
    startTransition(async () => {
      try {
        const newObj = {
          ...rest,
          advertSpaces: {
            page: advertSpaces.pageArray.split(","),
            secondary: advertSpaces.secondary
          }
        }
        const objCreate: z.infer<typeof AdvertSchemaWithSpacesForCreate> = {
          image: newObj.image,
          href: newObj.href,
          title: newObj.title,
          description: newObj.description,
          promoCode: newObj.promoCode,
          isEnabled: newObj.isEnabled,
          from: newObj.from,
          to: newObj.to,
          advertSpaces: {
            secondary: newObj.advertSpaces.secondary,
            page: newObj.advertSpaces.page
          }
        }
        await CreateAdvert.mutateAsync(objCreate)
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
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>title</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='href'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} className='h-56 w-full' />
              </FormControl>
              <FormDescription>Message from advert card</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='promoCode'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Promo code</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormDescription>Provide a promo code if exist</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Image url</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormDescription>Provide a promo code if exist</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='from'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormLabel>From</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value && format(field.value, "PPP")}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      captionLayout='dropdown'
                      fromDate={new Date("1900-01-01")}
                      fromMonth={new Date("1900-01-01")}
                      fromYear={1900}
                      toDate={new Date()}
                      toMonth={new Date()}
                      toYear={new Date().getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='to'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormLabel>To</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value && format(field.value, "PPP")}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      captionLayout='dropdown'
                      fromDate={new Date("1900-01-01")}
                      fromMonth={new Date("1900-01-01")}
                      fromYear={1900}
                      toDate={new Date()}
                      toMonth={new Date()}
                      toYear={new Date().getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='advertSpaces.pageArray'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pages</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormDescription>Name of page where the add will be displayed (EX: home,slots,casino)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='advertSpaces.secondary'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Advert</FormLabel>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormDescription>Message from advert card</FormDescription>
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

export { AdvertAddForm }
