"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type * as z from "zod"

import "@/styles/account-form.css"
import "react-phone-number-input/style.css"

// import ReactQuill from "react-quill"
import { toast } from "react-toastify"

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from "@ssp/ui"
import type { CasinoForUpdateSchema } from "@ssp/utils"
import {
  BonusTypesSchema,
  CasinoForEditSchema,
  CasinosTypeSchema,
  GameWagerSchema,
  PaySchema,
  PromoCodeSchema
} from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

import "react-quill/dist/quill.snow.css"

type CasinoFormValues = z.infer<typeof CasinoForEditSchema>

const CasinoEditForm = ({
  setOpenDialogEdit,
  casinoId
}: {
  setOpenDialogEdit: React.Dispatch<React.SetStateAction<boolean>>
  casinoId: string
}) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()
  const utils = clientApi.useUtils()
  //   const ReactQuill = React.useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), [])

  const casinoData = clientApi.casino.getById.useQuery(casinoId, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: 3000
  })
  const data = casinoData.data

  console.log(data, "id")

  const defaultValues: Partial<CasinoFormValues> = {
    id: data?.id ?? "",
    title: data?.title ?? "",
    href: data?.href ?? "",
    promoCode: data?.promoCode,
    description: data?.description ?? "",
    image: data?.image ?? "",
    paymentMethod: data?.paymentMethod,
    wager: data?.wager,
    bonusType: data?.bonusType,
    casinoType: data?.casinoType
  }

  const form = useForm<CasinoFormValues>({
    resolver: zodResolver(CasinoForEditSchema),
    defaultValues
  })

  const updateBonus = clientApi.casino.update.useMutation({
    onSuccess: () => {
      toast.success("Your game details have been updated successfully. 🎉")
      setOpenDialogEdit(false)
      utils.casino.getAll.invalidate()
    }
  })

  const onSubmit = (data: CasinoFormValues) => {
    const { ...rest } = data
    setError("")
    startTransition(async () => {
      try {
        const newObj = {
          ...rest
        }
        const objUpdate: z.infer<typeof CasinoForUpdateSchema> = {
          id: newObj.id,
          image: newObj.image,
          href: newObj.href,
          title: newObj.title,
          description: newObj.description,
          promoCode: newObj.promoCode,
          paymentMethod: newObj.paymentMethod,
          wager: newObj.wager,
          bonusType: newObj.bonusType,
          casinoType: newObj.casinoType
        }
        await updateBonus.mutateAsync(objUpdate)
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select currency' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PromoCodeSchema.options.map((promo) => (
                      <SelectItem key={promo} value={promo}>
                        {promo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                <FormDescription>Provide a url image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='paymentMethod'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Payment method</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select currency' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PaySchema.options.map((pay) => (
                      <SelectItem key={pay} value={pay}>
                        {pay}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='wager'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Wager</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select currency' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {GameWagerSchema.options.map((wager) => (
                      <SelectItem key={wager} value={wager}>
                        {wager}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bonusType'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Bonus type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select currency' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {BonusTypesSchema.options.map((bonus) => (
                      <SelectItem key={bonus} value={bonus}>
                        {bonus}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='casinoType'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Casino type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select currency' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CasinosTypeSchema.options.map((casino) => (
                      <SelectItem key={casino} value={casino}>
                        {casino}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {error && <Alert variant='destructive'>{error}</Alert>}
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Add bonus
        </Button>
      </form>
    </Form>
  )
}

export { CasinoEditForm }
