"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import type * as z from "zod"

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
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch
} from "@ssp/ui"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"
import type { currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility } from "./games"

type GameFormValues = z.infer<typeof GameWithReqSchema>
// type currentFeatures = {
//   id: string
//   createdAt: Date
//   updatedAt: Date
//   type: string
// }

// type currentProviders = {
//   id: string
//   createdAt: Date
//   updatedAt: Date
//   type: string
// }

// type currentReels = {
//   id: string
//   createdAt: Date
//   updatedAt: Date
//   type: string
// }

// type currentThemes = {
//   id: string
//   createdAt: Date
//   updatedAt: Date
//   type: string
// }

// type currentVolatility = {
//   id: string
//   createdAt: Date
//   updatedAt: Date
//   type: string
// }

const GameAddForm = ({
  setOpenDialogAdd,
  currentFeatures,
  currentProviders,
  currentReels,
  currentThemes,
  currentVolatility
}: {
  setOpenDialogAdd: React.Dispatch<React.SetStateAction<boolean>>
  currentFeatures: currentFeatures[]
  currentProviders: currentProviders[]
  currentReels: currentReels[]
  currentThemes: currentThemes[]
  currentVolatility: currentVolatility[]
}) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()
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
  console.log(features, "ff")

  const defaultValues: Partial<GameFormValues> = {
    apiId: "",
    name: "",
    description: "",
    thumbnail: "",
    images: "",
    imagesArray: [],
    gameUrl: "",
    href: "",
    gameRequirement: {
      title: "",

      reels: currentReels[0].type,
      rows: "",
      paylines: "",
      rtp: "",
      hitFreq: "",
      freeSpinsFreq: "",
      maxWin: "",
      maxWinProbability: "",
      volatility: currentVolatility[0].type,
      provider: currentProviders[0].type,
      features: [currentFeatures[0].type],
      theme: currentThemes[0].type,
      minMaxBet: "",
      releaseDate: new Date(Date.now())
    }
  }
  const form = useForm<GameFormValues>({
    resolver: zodResolver(GameWithReqSchema),
    defaultValues
  })

  const CreateNewGame = clientApi.game.create.useMutation({
    onSuccess: () => {
      toast.success("Your game was created successfully. 🎉")
      setOpenDialogAdd(false)
      location.reload()
    }
  })

  const onSubmit = (data: GameFormValues) => {
    const { images, imagesArray, gameUrl, name, ...rest } = data
    setError("")
    startTransition(async () => {
      try {
        const newObj = {
          ...rest,
          gameUrl: name
            ?.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/gi, "-")
            .toLowerCase(),
          name: name,
          imagesArray: images?.split(",")
        }
        const objCreate: z.infer<typeof GameWithReqForCreateSchema> = {
          apiId: parseInt(newObj.apiId),
          name: newObj.name,
          description: newObj.description ? newObj.description : "",
          thumbnail: newObj.thumbnail ? newObj.thumbnail : "",
          images: newObj.imagesArray ? newObj.imagesArray : [],
          gameUrl: newObj.gameUrl ? newObj.gameUrl : "",
          gameDemoUrl: "",
          liveGameUrl: "",
          href: newObj.href ? newObj.href : "",
          gameRequirement: {
            title: newObj.gameRequirement.title ? newObj.gameRequirement.title : "",
            reels: newObj.gameRequirement.reels ? newObj.gameRequirement.reels : "",
            rows: newObj.gameRequirement.rows ? newObj.gameRequirement.rows : "",
            paylines: newObj.gameRequirement.paylines ? newObj.gameRequirement.paylines : "",
            rtp: newObj.gameRequirement.rtp ? newObj.gameRequirement.rtp : "",
            hitFreq: newObj.gameRequirement.hitFreq ? newObj.gameRequirement.hitFreq : "",
            freeSpinsFreq: newObj.gameRequirement.freeSpinsFreq ? newObj.gameRequirement.freeSpinsFreq : "",
            maxWin: newObj.gameRequirement.maxWin ? newObj.gameRequirement.maxWin : "",
            maxWinProbability: newObj.gameRequirement.maxWinProbability ? newObj.gameRequirement.maxWinProbability : "",
            volatility: newObj.gameRequirement.volatility ? newObj.gameRequirement.volatility : "",
            provider: newObj.gameRequirement.provider ? newObj.gameRequirement.provider : "",
            features: features ? features : [],
            theme: newObj.gameRequirement.theme ? newObj.gameRequirement.theme : "",
            minMaxBet: newObj.gameRequirement.minMaxBet ? newObj.gameRequirement.minMaxBet : "",
            releaseDate: new Date(newObj.gameRequirement.releaseDate ? newObj.gameRequirement.releaseDate : Date.now())
          }
        }

        await CreateNewGame.mutateAsync(objCreate)
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
            name='apiId'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>API id</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
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
            name='description'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='thumbnail'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Thumbnail</FormLabel>
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
            name='images'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Image url</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormDescription>Enter URL for images with coma between</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='href'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Href</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormDescription>Enter URL </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='gameRequirement.title'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game title</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormField
          control={form.control}
          name='gameRequirement.reels'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game reels</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='gameRequirement.reels'
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
          <FormField
            control={form.control}
            name='gameRequirement.volatility'
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
        </div>
        <div className='flex w-full items-center gap-8'>
          <FormField
            control={form.control}
            name='gameRequirement.theme'
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
          name='gameRequirement.provider'
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
            name='gameRequirement.rows'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game rows</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gameRequirement.paylines'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game paylines</FormLabel>
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
            name='gameRequirement.rtp'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game rtp</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gameRequirement.hitFreq'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game hitFreq</FormLabel>
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
            name='gameRequirement.freeSpinsFreq'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game freeSpinsFreq</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gameRequirement.maxWin'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game max win</FormLabel>
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
            name='gameRequirement.maxWinProbability'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game max win probability</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gameRequirement.volatility'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game volatility</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormField
            control={form.control}
            name='gameRequirement.provider'
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
            name='gameRequirement.features'
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
            name='gameRequirement.theme'
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
          name='gameRequirement.minMaxBet'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Game minMaxBet</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gameRequirement.releaseDate'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Game relesea date</FormLabel>
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
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <Alert variant='destructive'>{error}</Alert>}
        <Button type='submit' disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Add game
        </Button>
      </form>
    </Form>
  )
}

export { GameAddForm }
