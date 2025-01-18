"use client"

import * as React from "react"

import { Separator } from "@ssp/ui"

import { FeatureAddForm } from "./features-add-form"
import { ProviderAddForm } from "./provider-add-form"
import { ReelsAddForm } from "./reels-add-form"
import { ThemeAddForm } from "./theme-add-form"
import { VolatilityAddForm } from "./volatility-add-form"

const GeneralConfigView = () => {
  return (
    <div className='flex flex-col justify-start'>
      <div className='h-full flex-1 flex-col space-y-8 p-8 '>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
            <p className='text-muted-foreground'>Here&apos;s a list of your games!</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <Separator className='my-6' />
        <FeatureAddForm />
        {/* <ProviderAddForm setOpenDialogAdd={setOpenDialogAdd} />
        <ReelsAddForm setOpenDialogAdd={setOpenDialogAdd} />
        <ThemeAddForm setOpenDialogAdd={setOpenDialogAdd} />
        <VolatilityAddForm setOpenDialogAdd={setOpenDialogAdd} /> */}
      </div>
    </div>
  )
}

export default GeneralConfigView
