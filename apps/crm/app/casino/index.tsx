"use client"

import * as React from "react"
import { PlusCircle } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Separator } from "@ssp/ui"

import { columns } from "@/app/casino/columns"
import { DataTable } from "@/app/casino/data-table"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import { CasinoAddForm } from "./casino-add-form"

const CasinoView = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["casino"]["getAll"]["query"]>>
}) => {
  const { data: session } = useSession()
  const allCasinos = clientApi.casino.getAll.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const [openDialogAdd, setOpenDialogAdd] = React.useState<boolean>(false)
  const handlerAdd = () => {
    setOpenDialogAdd(true)
  }
  const casinoData = allCasinos.data?.map((item) => {
    return {
      id: item.id,
      href: item.href ?? undefined,
      title: item.title ?? undefined,
      description: item.description ?? undefined,
      promoCode: item.promoCode ?? undefined,
      paymentMethod: item.paymentMethod ?? undefined,
      wager: item.wager ?? undefined,
      bonusType: item.bonusType ?? undefined,
      casinoType: item.casinoType ?? undefined,
      image: item.image ?? undefined
    }
  })

  if (session !== null && casinoData !== undefined)
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
          <DataTable data={casinoData} columns={columns} />
        </div>
        <Dialog open={openDialogAdd} onOpenChange={setOpenDialogAdd}>
          <DialogContent className='no-scrollbar  h-[80vh] max-w-6xl overflow-auto p-10'>
            <DialogHeader className='sticky '>
              <DialogTitle>Add new bonus</DialogTitle>
              {/* <DialogDescription>
                Make changes to user profile here. Click save when you&apos;re done.
              </DialogDescription> */}
            </DialogHeader>
            <Separator className='my-6' />
            <CasinoAddForm setOpenDialogAdd={setOpenDialogAdd} />
          </DialogContent>
        </Dialog>
      </div>
    )
}

export { CasinoView }
