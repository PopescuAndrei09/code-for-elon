"use client"

import * as React from "react"
import dynamic from "next/dynamic"
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
  Input
} from "@ssp/ui"
import { GameSchema } from "@ssp/utils"

import { Icons } from "@/components/icons"
import { clientApi } from "@/trpc/client"

import "react-quill/dist/quill.snow.css"

type GameFormValues = z.infer<typeof GameSchema>

const GameEditForm = ({
  setOpenDialogEdit,
  data
}: {
  setOpenDialogEdit: React.Dispatch<React.SetStateAction<boolean>>
  data: GameFormValues
}) => {
  const [error, setError] = React.useState<string>("")
  const [isLoading, startTransition] = React.useTransition()
  const utils = clientApi.useUtils()
  const ReactQuill = React.useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), [])
  const [value, setValue] = React.useState(data?.description ?? "")
  const defaultValues: Partial<GameFormValues> = {
    id: data?.id ?? "",
    name: data?.name ?? "",
    apiId: data?.apiId ?? undefined,
    thumbnail: data?.thumbnail ?? "",
    gameUrl: data?.gameUrl ?? "",
    gameDemoUrl: data?.gameDemoUrl ?? "",
    liveGameUrl: data?.liveGameUrl ?? "",
    description: data?.description ?? "",
    images: data?.images ?? []
    // gameRequirementId: data?.gameRequirementId ?? ""
  }

  const form = useForm<GameFormValues>({
    resolver: zodResolver(GameSchema),
    defaultValues
  })

  const updateGame = clientApi.game.updateGame.useMutation({
    onSuccess: () => {
      toast.success("Your game details have been updated successfully. 🎉")
      setOpenDialogEdit(false)
      utils.game.getAll.invalidate()
    }
  })

  const onSubmit = (data: GameFormValues) => {
    setError("")
    data.description = value
    startTransition(async () => {
      console.log(data)

      try {
        await updateGame.mutateAsync(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    })
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      [{ color: [] }], // Add color to the toolbar
      ["clean"]
    ],
    clipboard: {
      matchVisual: false
    }
  }

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color" // Include color in the formats
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col space-y-8'>
        <div className='flex w-full items-center gap-8'>
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

          <FormField
            control={form.control}
            name='apiId'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>apiId</FormLabel>
                <FormControl>
                  <Input type='text' {...field} disabled />
                </FormControl>
                <FormDescription>Api id for game</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-full items-center gap-8'>
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

          <FormField
            control={form.control}
            name='images'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Image</FormLabel>
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
            name='gameUrl'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Game Url</FormLabel>
                <FormControl>
                  <Input type='text' {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gameDemoUrl'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Demo game</FormLabel>
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
          name='liveGameUrl'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Live game url</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>description</FormLabel>
              <FormControl>
                <ReactQuill theme='snow' value={value} onChange={setValue} modules={modules} formats={formats} />
              </FormControl>
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

export { GameEditForm }
