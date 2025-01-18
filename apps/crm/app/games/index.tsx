"use client"

import * as React from "react"
import { PlusCircle } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Separator } from "@ssp/ui"
import type { Game } from "@ssp/utils"

import { columns } from "@/app/games/columns"
import { DataTable } from "@/app/games/data-table"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"
import { GameAddForm } from "./game-add-form"
import { GameStatusProvider } from "./game-context"

const GameView = ({
  initialData,
  allFeatures,
  allProviders,
  allReels,
  allTheme,
  allVolatility
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["game"]["getAll"]["query"]>>
  allFeatures: Awaited<ReturnType<(typeof serverApi)["features"]["getAll"]["query"]>>
  allProviders: Awaited<ReturnType<(typeof serverApi)["providers"]["getAll"]["query"]>>
  allReels: Awaited<ReturnType<(typeof serverApi)["reels"]["getAll"]["query"]>>
  allTheme: Awaited<ReturnType<(typeof serverApi)["theme"]["getAll"]["query"]>>
  allVolatility: Awaited<ReturnType<(typeof serverApi)["volatility"]["getAll"]["query"]>>
}) => {
  const { data: session } = useSession()
  const allGames = clientApi.game.getAll.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const allFeaturesData = clientApi.features.getAll.useQuery(undefined, {
    initialData: allFeatures,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const currentFeatures = allFeaturesData.data

  const allProvidersData = clientApi.providers.getAll.useQuery(undefined, {
    initialData: allProviders,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const currentProviders = allProvidersData.data

  const allReelsData = clientApi.reels.getAll.useQuery(undefined, {
    initialData: allReels,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const currentReels = allReelsData.data

  const allThemeData = clientApi.theme.getAll.useQuery(undefined, {
    initialData: allTheme,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const currentThemes = allThemeData.data

  const allVolatilityData = clientApi.volatility.getAll.useQuery(undefined, {
    initialData: allVolatility,
    refetchOnMount: false,
    refetchOnReconnect: false
  })

  const currentVolatility = allVolatilityData.data

  const [openDialogAdd, setOpenDialogAdd] = React.useState<boolean>(false)
  const handlerAdd = () => {
    setOpenDialogAdd(true)
  }
  if (session !== null && allGames !== null && allGames.isFetched && allGames.status === "success") {
    const gameData =
      allGames !== null &&
      allGames.data?.map((item: Game) => {
        return {
          id: item.id,
          apiId: item.apiId ?? 0,
          name: item.name ?? "",
          description: item.description ?? "",
          thumbnail: item.thumbnail ?? "",
          gameUrl: item.gameUrl ?? "",
          gameDemoUrl: item.gameDemoUrl ?? "",
          liveGameUrl: item.liveGameUrl ?? "",
          images: item.images ?? [],
          gameRequirementId: item.gameRequirementId ?? null
        }
      })
    if (gameData !== null || gameData !== undefined) {
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
            <GameStatusProvider
              currentFeaturesData={currentFeatures}
              currentProvidersData={currentProviders}
              currentReelsData={currentReels}
              currentThemesData={currentThemes}
              currentVolatilityData={currentVolatility}
            >
              <DataTable data={gameData || []} columns={columns} />
            </GameStatusProvider>
          </div>
          <Dialog open={openDialogAdd} onOpenChange={setOpenDialogAdd}>
            <DialogContent className='no-scrollbar   max-w-6xl overflow-auto p-10'>
              <DialogHeader className='sticky '>
                <DialogTitle>Add new game</DialogTitle>
                {/* <DialogDescription>
                Make changes to user profile here. Click save when you&apos;re done.
              </DialogDescription> */}
              </DialogHeader>
              <Separator className='my-6' />
              <GameAddForm
                setOpenDialogAdd={setOpenDialogAdd}
                currentFeatures={currentFeatures}
                currentProviders={currentProviders}
                currentReels={currentReels}
                currentThemes={currentThemes}
                currentVolatility={currentVolatility}
              />
            </DialogContent>
          </Dialog>
        </div>
      )
    }
  }
}

export { GameView }
