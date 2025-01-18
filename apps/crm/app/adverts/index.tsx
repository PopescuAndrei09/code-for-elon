"use client"

import * as React from "react"
import { PlusCircle } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Separator } from "@ssp/ui"
import type { AdvertUpdateType } from "@ssp/utils"
import { Advert } from "@ssp/utils"

import { columns } from "@/app/adverts/columns"
import { DataTable } from "@/app/adverts/data-table"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import { AdvertAddForm } from "./advert-add-form"

const AdvertView = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["advert"]["getAll"]["query"]>>
}) => {
  const { data: session } = useSession()
  const allAdverts = clientApi.advert.getAll.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const [openDialogAdd, setOpenDialogAdd] = React.useState<boolean>(false)
  const handlerAdd = () => {
    setOpenDialogAdd(true)
  }
  const advertData = allAdverts.data?.map((item: AdvertUpdateType) => {
    return {
      id: item.id,
      href: item.href ?? undefined,
      title: item.title ?? undefined,
      description: item.description ?? undefined,
      promoCode: item.promoCode ?? undefined,
      isEnabled: item.isEnabled ?? undefined,
      from: item.from ?? undefined,
      to: item.to ?? undefined,
      image: item.image ?? undefined
    }
  })

  if (session !== null && advertData !== undefined)
    return (
      <div className='flex grow items-end justify-end'>
        <div className='h-full flex-1 flex-col space-y-8 p-8 '>
          <div className='flex items-center justify-between space-y-2'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
              <p className='text-muted-foreground'>Here&apos;s a list of your games!</p>
            </div>
            <Button rounded='default' size='lg' variant='outline' className='flex gap-4' onClick={handlerAdd}>
              <PlusCircle /> Add
            </Button>
          </div>
          <DataTable data={advertData} columns={columns} />
        </div>
        <Dialog open={openDialogAdd} onOpenChange={setOpenDialogAdd}>
          <DialogContent className='no-scrollbar  h-[80vh] max-w-6xl overflow-auto p-10'>
            <DialogHeader className='sticky '>
              <DialogTitle>Add new advert</DialogTitle>
              {/* <DialogDescription>
                Make changes to user profile here. Click save when you&apos;re done.
              </DialogDescription> */}
            </DialogHeader>
            <Separator className='my-6' />
            <AdvertAddForm setOpenDialogAdd={setOpenDialogAdd} />
          </DialogContent>
        </Dialog>
      </div>
    )
}

export { AdvertView }
