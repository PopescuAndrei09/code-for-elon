import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@ssp/ui"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"

const HomeCard = ({ games }: { games: Awaited<ReturnType<(typeof serverApi)["game"]["getAllWithReq"]["query"]>> }) => {
  const [hoveredGame, setHoveredGame] = React.useState<string | null>(null)
  const router = useRouter()

  const AllGames = clientApi.game.getAllWithReq.useQuery(
    { order: "latest" },
    {
      initialData: games,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  )
  const currentGames = AllGames.data

  const handleMouseEnter = (gameId: string) => {
    setHoveredGame(gameId)
  }

  const handleMouseLeave = () => {
    setHoveredGame(null)
  }

  return (
    <div className=''>
      {currentGames?.map((game) => (
        <div
          key={game.id}
          onMouseEnter={() => handleMouseEnter(game.id)}
          onMouseLeave={handleMouseLeave}
          className='relative'
        >
          <Image src={game.images[0]} alt={game.name} width={180} height={180} />
          {hoveredGame === game.id && (
            <div className='absolute inset-0 flex flex-col space-y-4 bg-black bg-opacity-50 p-1'>
              <span className='text-center text-white'>{game.name}</span>
              <div className='mt-2 flex flex-col gap-2'>
                <Button className='rounded-3xl' onClick={() => router.push(`/game?id=${game.id}`)}>
                  Play for free
                </Button>
                <Link href={game?.liveGameUrl || "#"}>
                  <Button className='w-full whitespace-normal rounded-3xl bg-white'> Play with real money</Button>
                </Link>
              </div>
              {/* <div className='text-center'>Slot review</div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default HomeCard
