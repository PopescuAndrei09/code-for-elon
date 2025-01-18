import { Separator } from "@ssp/ui"

import { serverApi } from "@/trpc/server"
import { AccountForm } from "./account-form"

const SettingsAccountPage = async () => {
  const me = await serverApi.user.me.query()

  return (
    <div className='space-y-6 lg:max-w-xl'>
      <div>
        <h3 className='text-lg font-medium'>Account</h3>
        <p className='text-muted-foreground text-sm'>Update your account details and set your preferred language.</p>
      </div>
      <Separator />
      <AccountForm me={me} />
    </div>
  )
}

export default SettingsAccountPage
