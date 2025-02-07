import { Separator } from "@ssp/ui"

import { serverApi } from "@/trpc/server"
import { NotificationsForm } from "./notifications-form"

const SettingsNotificationsPage = async () => {
  const me = await serverApi.user.me.query()

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Notifications</h3>
        <p className='text-muted-foreground text-sm'>Configure how you receive notifications.</p>
      </div>
      <Separator />
      <NotificationsForm me={me} />
    </div>
  )
}

export default SettingsNotificationsPage
