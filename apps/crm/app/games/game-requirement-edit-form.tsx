"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { addYears, format } from "date-fns"
import { useForm } from "react-hook-form"
import type * as z from "zod"

import "@/styles/account-form.css"
import "react-phone-number-input/style.css"

import { CalendarIcon } from "@radix-ui/react-icons"
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
  LoadingPage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch
} from "@ssp/ui"
import { GameRequirementEditInputSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import type { currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility } from "./games"

type GameReqFormValues = z.infer<typeof GameRequirementEditInputSchema>

const GameReqEditForm = ({
  setOpenDialogEditGameReq,
  gameId,
  openDialogEditGameReq,
  gameReqId,
  currentFeatures,
  currentProviders,
  currentReels,
  currentThemes,
  currentVolatility,
  initialData
}: {
  setOpenDialogEditGameReq: React.Dispatch<React.SetStateAction<boolean>>
  gameId: string
  openDialogEditGameReq: boolean
  gameReqId: string
  currentFeatures: currentFeatures[]
  currentProviders: currentProviders[]
  currentReels: currentReels[]
  currentThemes: currentThemes[]
  currentVolatility: currentVolatility[]
  initialData: Awaited<ReturnType<(typeof serverApi)["gameRequirement"]["getById"]["query"]>>
}) => {
  const [error, setError] = React.useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)
  const [isLoading, startTransition] = React.useTransition()
  const [features, setFeatures] = React.useState<string[]>([])
  const utils = clientApi.useUtils()
  const handleFeatureToggle = (feature: string) => {
    // Check if the feature is already selected
    console.log(feature, "sa")
    const isSelected = features.includes(feature)

    if (isSelected) {
      // If selected, remove it
      setFeatures((prevFeatures) => prevFeatures.filter((item) => item !== feature))
    } else {
      // If not selected, add it
      setFeatures((prevFeatures) => [...prevFeatures, feature])
    }
  }

  const gameRequirement = clientApi.gameRequirement.getById.useQuery(
    { id: gameReqId },
    {
      initialData,
      enabled: openDialogEditGameReq && !!gameReqId
    }
  )
  const data = gameRequirement.data

  const defaultValues: Partial<GameReqFormValues> = {
    id: data?.id,
    title: data?.title ?? undefined,

    reels: currentReels[0].type,
    rows: data?.rows ?? undefined,
    paylines: data?.paylines ?? undefined,
    rtp: data?.rtp ?? "",
    hitFreq: data?.hitFreq ?? "",
    freeSpinsFreq: data?.freeSpinsFreq ?? undefined,
    maxWin: data?.maxWin ?? undefined,
    maxWinProbability: data?.maxWinProbability ?? undefined,
    volatility: currentVolatility[0].type,
    provider: currentProviders[0].type,
    features: [currentFeatures[0].type],
    theme: currentThemes[0].type,
    minMaxBet: data?.minMaxBet ?? undefined,
    releaseDate: data?.releaseDate ?? new Date(Date.now()),
    game: gameId ?? undefined
  }
  console.log(defaultValues, "defaultValues")
  const form = useForm<GameReqFormValues>({
    resolver: zodResolver(GameRequirementEditInputSchema),
    defaultValues
  })

  const updateGameReq = clientApi.gameRequirement.update.useMutation({
    onSuccess: () => {
      toast.success("Your game details have been updated successfully. 🎉")
      setOpenDialogEditGameReq(false)
      utils.gameRequirement.getById.invalidate()
    }
  })

  const onSubmit = (data: GameReqFormValues) => {
    setError("")
    startTransition(async () => {
      try {
        console.log("intra")
        await updateGameReq.mutateAsync(data)
        console.log("iese")
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    })
  }
  // if ((gameRequirement.status === "loading" && !gameRequirement.isLoading, !gameRequirement.isFetching)) {
  //   return <LoadingPage />
  // }

  return (
    <Form {...form}>
      {!!data &&
      data !== undefined &&
      gameRequirement.status === "success" &&
      !!defaultValues &&
      defaultValues.id !== undefined ? (
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col space-y-8'>
          <div className='flex w-full items-center gap-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex w-full items-center gap-8'>
            <FormField
              control={form.control}
              name='reels'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Reels</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select reel' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currentReels.map((item, key) => (
                        <div key={key}>
                          <SelectItem value={item.type}>{item.type}</SelectItem>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='rows'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>rows</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex w-full items-center gap-8'>
            <FormField
              control={form.control}
              name='rtp'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>rtp</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='hitFreq'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>hitFreq</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex w-full items-center gap-8'>
            <FormField
              control={form.control}
              name='freeSpinsFreq'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>freeSpinsFreq</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='maxWin'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>maxWin</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex w-full items-center gap-8'>
            <FormField
              control={form.control}
              name='maxWinProbability'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>maxWinProbability</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='provider'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Provider</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select provider ' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currentProviders.map((item, key) => (
                        <SelectItem value={item.type} key={key}>
                          {item.type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='volatility'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Volatility</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Volatility ' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {currentVolatility.map((item, key) => (
                      <SelectItem value={item.type} key={key}>
                        {item.type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className=' grid grid-cols-4 justify-items-start  gap-4'>
            {currentFeatures.map((item, index) => {
              return (
                <div className='flex items-center gap-2' key={index}>
                  {item.type}
                  <Switch id={item.type} onClick={() => handleFeatureToggle(item.type)} />
                </div>
              )
            })}
          </div>
          <div className='flex w-full items-center gap-8'>
            <FormField
              control={form.control}
              name='minMaxBet'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>minMaxBet</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='theme'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Theme</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select theme ' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currentThemes.map((item, key) => (
                        <SelectItem value={item.type} key={key}>
                          {item.type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='releaseDate'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Relese Date</FormLabel>
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
                      className='rounded-md border'
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      captionLayout='dropdown'
                      // fromDate={new Date("2020-01-01")}
                      // fromMonth={new Date("1900-01-01")}
                      // fromYear={1900}
                      // toDate={new Date()}
                      // toMonth={new Date()}
                      // toYear={addYears(new Date(), 10).getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <Alert variant='destructive'>{error}</Alert>}
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            Edit game
          </Button>
        </form>
      ) : (
        <LoadingPage />
      )}
    </Form>
  )
}

export { GameReqEditForm }
