"use client"

import * as React from "react"
import { formatDistance } from "date-fns"
import { Archive, ArchiveRestore, Bell, ShieldAlert } from "lucide-react"
import { useSession } from "next-auth/react"

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@ssp/ui"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import { NotificationAddForm } from "./notification-form"

const NotificationView = ({
  initialData
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["notification"]["getNotifications"]["query"]>>
}): React.JSX.Element => {
  const notifications = clientApi.notification.getNotifications.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: 60 * 1000 // 1 minute
  })
  const { data: session } = useSession()
  const [openDialogAdd, setOpenDialogAdd] = React.useState<boolean>(false)

  const notificationStore = notifications.data

  const utils = clientApi.useUtils()

  const newNotifications = notificationStore?.filter((notification) => !notification.read) || []
  const readNotifications = notificationStore?.filter((notification) => notification.read) || []

  const [localNewNotifications, setLocalNewNotifications] = React.useState(newNotifications)
  const [localReadNotifications, setLocalReadNotifications] = React.useState(readNotifications)

  const archiveNotification = clientApi.notification.archiveNotification.useMutation()

  const handleArchive = (notificationId: string) => {
    // Optimistically update the local notifications
    const notificationToArchive = newNotifications.find((notification) => notification.id === notificationId)

    if (!notificationToArchive) {
      // Handle the case where the notification is not found
      console.error(`Notification with ID ${notificationId} not found`)
      return
    }

    // Set the read property of the notification to true
    notificationToArchive.read = true

    setLocalNewNotifications(localNewNotifications.filter((notification) => notification.id !== notificationId))
    setLocalReadNotifications([notificationToArchive, ...localReadNotifications])

    archiveNotification.mutate(
      { id: notificationId },
      {
        // If the mutation fails, revert the local notifications to their previous state
        onError: () => {
          setLocalNewNotifications(newNotifications)
          setLocalReadNotifications(readNotifications)
        },
        // If the mutation succeeds, update the local notifications with the server's state
        onSuccess: () => {
          utils.notification.getNotifications.invalidate()
        }
      }
    )
  }

  React.useEffect(() => {
    const newNotifications = notificationStore?.filter((notification) => !notification.read) || []
    const readNotifications = notificationStore?.filter((notification) => notification.read) || []

    setLocalNewNotifications(newNotifications)
    setLocalReadNotifications(readNotifications)
  }, [notificationStore])

  return (
    <>
      <Tabs
        defaultValue='inbox'
        className='no-scrollbar flex h-full w-full select-none flex-col overflow-auto lg:max-h-96 '
      >
        <TabsList className='sticky top-0 z-10 mb-3'>
          <TabsTrigger value='inbox' className='w-full'>
            Inbox
          </TabsTrigger>
          <TabsTrigger value='archive' className='w-full'>
            Archive
          </TabsTrigger>
        </TabsList>
        <div>
          {localNewNotifications?.length === 0 ? (
            <TabsContent
              value='inbox'
              className='min-w text-md flex h-full flex-col items-center justify-center gap-2 p-4 px-2 font-semibold data-[state=inactive]:hidden'
            >
              <Bell className='h-8 w-8 text-gray-600' />
              No new notifications
            </TabsContent>
          ) : (
            <TabsContent
              value='inbox'
              className='flex flex-col items-center justify-items-center gap-2 px-2 data-[state=inactive]:hidden'
            >
              {localNewNotifications.map((notification, index) => {
                return (
                  <div key={notification.id} className='flex w-full flex-col gap-2'>
                    <div className='group flex w-full items-center justify-center gap-4'>
                      <div className=' flex items-center justify-center'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-full border bg-artdevium-olive align-middle'>
                          <ShieldAlert className='h-8 w-8 text-artdevium-vanilla' />
                        </div>
                      </div>
                      <div className='flex w-full flex-col justify-start'>
                        <div className='text-xs'>
                          <p>{notification.message}</p>
                        </div>
                        <div className='text-muted-foreground text-xs'>
                          {formatDistance(new Date(notification.createdAt), new Date()) + " ago"}
                        </div>
                      </div>
                      <div className='flex w-16 items-center justify-center'>
                        <div className='flex h-2 w-2 animate-pulse items-center justify-center rounded-full bg-artdevium-azure text-xs transition-transform group-hover:translate-x-[-20px]'></div>
                        <div className='cursor-pointer opacity-0 transition-opacity duration-200 ease-linear group-hover:opacity-100'>
                          <div
                            className='group rounded-full p-2 hover:bg-muted'
                            onClick={() => {
                              handleArchive(notification.id)
                            }}
                          >
                            <ArchiveRestore className='text-muted-foreground h-4 w-4 group-hover:text-primary' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {index !== localNewNotifications.length - 1 && <Separator />}
                  </div>
                )
              })}
            </TabsContent>
          )}

          {localReadNotifications?.length === 0 ? (
            <TabsContent
              value='archive'
              className='min-w text-md flex h-full flex-col items-center justify-center gap-2 p-4 px-2 font-semibold data-[state=inactive]:hidden'
            >
              <Archive className='h-8 w-8 text-gray-600' />
              Archive is empty
            </TabsContent>
          ) : (
            <TabsContent
              value='archive'
              className='flex flex-col items-center justify-center justify-items-center gap-2 px-2 data-[state=inactive]:hidden'
            >
              {localReadNotifications.map((notification, index) => {
                if (!notification.read) return null
                return (
                  <div key={notification.id} className='flex w-full flex-col gap-2'>
                    <div className='group flex w-full items-center justify-center gap-4'>
                      <div className=' flex items-center justify-center'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-full border bg-artdevium-olive align-middle'>
                          <ShieldAlert className='h-8 w-8 text-artdevium-vanilla' />
                        </div>
                      </div>
                      <div className='flex w-full flex-col justify-start'>
                        <div className='text-xs'>
                          <p>{notification.message}</p>
                        </div>
                        <div className='text-muted-foreground text-xs'>
                          {formatDistance(new Date(notification.createdAt), new Date()) + " ago"}
                        </div>
                      </div>
                      <div className='flex w-16 items-center justify-center'></div>
                    </div>
                    {index !== localReadNotifications.length - 1 && <Separator />}
                  </div>
                )
              })}
            </TabsContent>
          )}
        </div>
      </Tabs>
      {session?.prismaUser.role === "admin" && (
        <Button className='w-full' onClick={() => setOpenDialogAdd(true)}>
          Create notification
        </Button>
      )}
      <Dialog open={openDialogAdd} onOpenChange={setOpenDialogAdd}>
        <DialogContent className='no-scrollbar  max-h-[800px] max-w-6xl overflow-auto p-10'>
          <DialogHeader className='sticky '>
            <DialogTitle>Add new notification</DialogTitle>
          </DialogHeader>
          <Separator className='my-6' />
          <NotificationAddForm setOpenDialogAdd={setOpenDialogAdd} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export { NotificationView }
