import type { Metadata } from "next"

import { Separator } from "@ssp/ui"

import { siteMetadata } from "@/components/metadata"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Settings`
}

const sidebarNavItems = [
  {
    title: "Account",
    href: "/settings"
  },
  {
    title: "Notifications",
    href: "/settings/notifications"
  }
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className='mx-4 max-w-6xl grow space-y-6 rounded-xl border bg-card p-10 pb-16 md:mx-12 lg:mx-16'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
        <p className='text-muted-foreground'>Manage your account settings, notifications and payment preferences.</p>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <aside className='-mx-4 md:w-1/5'>
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className='flex-1 lg:max-w-2xl'>{children}</div>
      </div>
    </div>
  )
}
