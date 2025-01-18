"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import countryNames from "react-phone-number-input/locale/en.json"
import type * as z from "zod"

import "@/styles/account-form.css"

import type { userSchema } from "@ssp/utils"
import { accountFormSchema, getInitials } from "@ssp/utils"

import "react-phone-number-input/style.css"

import PhoneInput from "react-phone-number-input"
import { toast } from "react-toastify"

import {
  Alert,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Calendar,
  cn,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
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

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" }
] as const

type AccountFormValues = z.infer<typeof userSchema>

const UserAccountForm = ({
  data,
  setOpenDialogEdit
}: {
  data: AccountFormValues
  setOpenDialogEdit: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const prismaUser = data
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()
  const utils = clientApi.useUtils()
  const defaultValues: Partial<AccountFormValues> = {
    id: prismaUser?.id ?? "",
    name: prismaUser?.name ?? "",
    firstName: prismaUser?.firstName ?? "",
    lastName: prismaUser?.lastName ?? "",
    phone: prismaUser?.phone ?? "",
    address: prismaUser?.address ?? "",
    state: prismaUser?.state ?? "",
    city: prismaUser?.city ?? "",
    postalCode: prismaUser?.postalCode ?? "",
    birthdate: prismaUser?.birthdate ? new Date(prismaUser?.birthdate) : undefined,
    country: prismaUser?.country ?? "",
    language: prismaUser?.language ?? "en",
    image: ""
  }

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues
  })

  const update = clientApi.user.update.useMutation({
    onSuccess: () => {
      toast.success("Your account details have been updated successfully. 🎉")
      setOpenDialogEdit(false)
      utils.user.getAll.invalidate()
    }
  })

  const onSubmit = (data: AccountFormValues) => {
    setError("")
    startTransition(async () => {
      try {
        await update.mutateAsync(data)
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
        <div className='flex gap-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type='text' autoComplete='given-name' {...field} />
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
                  <Input type='text' autoComplete='family-name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex items-center'>
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem className='w-full'>
                <div className='flex flex-row items-center gap-4 '>
                  <FormLabel>Avatar</FormLabel>
                  <Avatar>
                    <AvatarImage src={`${prismaUser?.image}`} />
                    <AvatarFallback>{getInitials(defaultValues?.name)}</AvatarFallback>
                  </Avatar>
                </div>
                <FormControl>
                  <Input id='image' type='file' className='w-3/4 sm:w-1/2' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

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
                  {...field}
                  className='w-3/4 sm:w-1/2'
                  onCountryChange={(countryCode) => {
                    if (countryCode) {
                      form.setValue("country", countryNames[countryCode])
                    }
                  }}
                />
              </FormControl>
              <FormDescription>This is the phone number that will be used to contact and identify you.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type='text' autoComplete='shipping street-address' {...field} className='w-3/4 sm:w-1/2' />
              </FormControl>
              <FormDescription>Your current residential address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='state'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Province</FormLabel>
              <FormControl>
                <Input type='text' autoComplete='shipping address-level1' {...field} className='w-1/2 sm:w-1/4 ' />
              </FormControl>
              <FormDescription>Your current residential province or state.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input type='text' autoComplete='shipping address-level2' {...field} className='w-1/2 sm:w-1/4 ' />
              </FormControl>
              <FormDescription>Your current residential city.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='postalCode'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <Input type='text' autoComplete='shipping postal-code' {...field} className='w-1/4 sm:w-1/5' />
              </FormControl>
              <FormDescription>Your current residential postal code.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='birthdate'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Date of birth</FormLabel>
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

        <div className='flex flex-row'>
          {error && <Alert variant='destructive'>{error}</Alert>}
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            Update account
          </Button>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='hidden' type='text' autoComplete='name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='hidden' type='text' autoComplete='country-name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='language'
            render={({ field }) => (
              <FormItem className='hidden'>
                <FormLabel>Language</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        role='combobox'
                        className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}
                      >
                        {field.value
                          ? languages.find((language) => language.value === field.value)?.label
                          : "Select language"}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search language...' />
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("language", language.value)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>This is the language that will be used in the application.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}

export { UserAccountForm }
