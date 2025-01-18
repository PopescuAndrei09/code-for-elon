"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type * as z from "zod"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch } from "@ssp/ui"

import "@/styles/account-form.css"
import "react-phone-number-input/style.css"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
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
import { GameRequirementCreateInputSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"
import type { currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility } from "./games"

type GameReqFormValues = z.infer<typeof GameRequirementCreateInputSchema>

const GameReqAddForm = ({
  setOpenDialogAddGameReq,
  gameId,
  currentFeatures,
  currentProviders,
  currentReels,
  currentThemes,
  currentVolatility
}: {
  setOpenDialogAddGameReq: React.Dispatch<React.SetStateAction<boolean>>
  gameId: string
  openDialogAddGameReq: boolean
  currentFeatures: currentFeatures[]
  currentProviders: currentProviders[]
  currentReels: currentReels[]
  currentThemes: currentThemes[]
  currentVolatility: currentVolatility[]
}) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()

  const utils = clientApi.useUtils()
  const [features, setFeatures] = React.useState<string[]>([])

  // setFeatures((prev) => [...prev, features])

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

  const defaultValues: Partial<GameReqFormValues> = {
    title: "" ?? undefined,

    reels: currentReels[0].type,
    rows: "" ?? undefined,
    paylines: "" ?? undefined,
    rtp: "" ?? undefined,
    hitFreq: "" ?? undefined,
    freeSpinsFreq: "" ?? undefined,
    maxWin: "" ?? undefined,
    maxWinProbability: "" ?? undefined,
    volatility: currentVolatility[0].type,
    provider: currentProviders[0].type,
    features: [currentFeatures[0].type],
    theme: currentThemes[0].type,
    minMaxBet: "" ?? undefined,
    releaseDate: new Date(Date.now()),
    game: gameId ?? undefined
  }

  const form = useForm<GameReqFormValues>({
    resolver: zodResolver(GameRequirementCreateInputSchema),
    defaultValues
  })

  const createGameReq = clientApi.gameRequirement.create.useMutation({
    onSuccess: () => {
      toast.success("Your game details have been updated successfully. 🎉")
      setOpenDialogAddGameReq(false)
      utils.game.getAll.invalidate()
    }
  })

  const onSubmit = (data: GameReqFormValues) => {
    setError("")
    startTransition(async () => {
      try {
        await createGameReq.mutateAsync(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='no-scrollbar flex h-[80vh] w-full max-w-5xl flex-col space-y-8 overflow-auto'
      >
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
                <FormLabel>reels</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
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
        <div className='flex w-full items-center gap-8'>
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
          name='provider'
          render={({ field }) => (
            <FormItem>
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
        <div className=' flex flex-wrap items-center  gap-4'>
          {currentFeatures.map((item, index) => {
            return (
              <div className='flex items-center gap-2' key={index}>
                {item.type}
                <Switch id={item.type} onClick={() => handleFeatureToggle(item.type)} />
              </div>
            )
          })}
        </div>
        {/* <FormField
            control={form.control}
            name='provider'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Provider</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='features'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Features</FormLabel>
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
              <FormItem>
                <FormLabel>Theme</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        <FormField
          control={form.control}
          name='minMaxBet'
          render={({ field }) => (
            <FormItem>
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
        {error && <Alert variant='destructive'>{error}</Alert>}
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Edit game
        </Button>
      </form>
    </Form>
  )
}

export { GameReqAddForm }
