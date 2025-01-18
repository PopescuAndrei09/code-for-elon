import * as React from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import type { Row } from "@tanstack/react-table"
import { toast } from "react-toastify"

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator
} from "@ssp/ui"
import { GameSchema } from "@ssp/utils"

import { clientApi } from "@/trpc/client"
import { GameStateContext } from "./game-context"
import { GameEditForm } from "./game-edit-form"
import { GameReqAddForm } from "./game-requirement-add-form"
import { GameReqEditForm } from "./game-requirement-edit-form"
import { currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility } from "./games"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>): React.JSX.Element {
  const game = GameSchema.parse(row.original)
  const { currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility } =
    React.useContext(GameStateContext)
  const [openDialogEdit, setOpenDialogEdit] = React.useState<boolean>(false)
  const [openDialogDelete, setOpenDialogDelete] = React.useState<boolean>(false)
  const [openDialogAddGameReq, setOpenDialogAddGameReq] = React.useState<boolean>(false)
  const [openDialogEditGameReq, setOpenDialogEditGameReq] = React.useState<boolean>(false)
  const [, startTransition] = React.useTransition()

  const utils = clientApi.useUtils()

  const deleteGame = clientApi.game.deleteGame.useMutation({
    onSuccess: () => {
      toast.success("The game has been deleted with success. 🎉")
      setOpenDialogDelete(false)
      utils.game.getAll.invalidate()
    }
  })

  const handleDelete = (confirm: boolean) => {
    setOpenDialogDelete(true)
    if (confirm) {
      startTransition(async () => {
        try {
          console.log(game.id)
          await deleteGame.mutateAsync({ id: game.id })
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message)
          }
        }
      })
    }
  }

  const gameRequirement = clientApi.gameRequirement.getById.useQuery({ id: game.gameRequirementId ?? "" })
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'>
            <DotsHorizontalIcon className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>
          <DropdownMenuItem onClick={() => setOpenDialogEdit(true)}>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          {game.gameRequirementId === undefined ? (
            <DropdownMenuItem onClick={() => setOpenDialogAddGameReq(true)}>Add requirements</DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => setOpenDialogEditGameReq(true)}>Edit requirement</DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleDelete(false)}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={openDialogEdit} onOpenChange={setOpenDialogEdit}>
        <DialogContent className='no-scrollbar  max-h-screen max-w-6xl overflow-auto p-10'>
          <DialogHeader className='sticky '>
            <DialogTitle>Edit game profile</DialogTitle>
            <DialogDescription>Make changes to game profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <Separator className='my-6' />
          <GameEditForm setOpenDialogEdit={setOpenDialogEdit} data={game} />
        </DialogContent>
      </Dialog>
      <Dialog open={openDialogAddGameReq} onOpenChange={setOpenDialogAddGameReq}>
        <DialogContent className='no-scrollbar  max-h-screen max-w-6xl overflow-auto p-10'>
          <DialogHeader className='sticky '>
            <DialogTitle>Add game requirements</DialogTitle>
            <DialogDescription>Make changes to game profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <Separator className='my-6' />
          <GameReqAddForm
            currentFeatures={currentFeatures}
            currentProviders={currentProviders}
            currentReels={currentReels}
            currentThemes={currentThemes}
            currentVolatility={currentVolatility}
            setOpenDialogAddGameReq={setOpenDialogAddGameReq}
            gameId={game.id}
            openDialogAddGameReq={openDialogAddGameReq}
          />
        </DialogContent>
      </Dialog>
      {game.gameRequirementId !== undefined && (
        <Dialog open={openDialogEditGameReq} onOpenChange={setOpenDialogEditGameReq}>
          <DialogContent className='no-scrollbar  max-h-screen max-w-6xl overflow-auto p-10'>
            <DialogHeader className='sticky '>
              <DialogTitle>Edit game requirements </DialogTitle>
              <DialogDescription>
                Make changes to game profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <Separator className='my-6' />
            {game.gameRequirementId !== undefined && game.id !== undefined && gameRequirement.status === "success" && (
              <GameReqEditForm
                setOpenDialogEditGameReq={setOpenDialogEditGameReq}
                gameId={game.id}
                gameReqId={game.gameRequirementId ?? ""}
                openDialogEditGameReq={openDialogEditGameReq}
                currentFeatures={currentFeatures}
                currentProviders={currentProviders}
                currentReels={currentReels}
                currentThemes={currentThemes}
                currentVolatility={currentVolatility}
                initialData={gameRequirement.data}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
      <Dialog open={openDialogDelete} onOpenChange={setOpenDialogDelete}>
        <DialogContent className='no-scrollbar  max-h-96 max-w-2xl overflow-auto p-10'>
          <DialogHeader className='sticky '>
            <DialogTitle>Delete game</DialogTitle>
            <DialogDescription>This action is irreversible, be sure you choose the correct game.</DialogDescription>
          </DialogHeader>
          <Separator className='my-6' />
          <div className='flex justify-center gap-4'>
            <Button variant={"white"} onClick={() => setOpenDialogDelete(false)} className='w-full'>
              Cancel
            </Button>
            <Button variant={"destructive"} onClick={() => handleDelete(true)} className='w-full'>
              I&apos;m sure
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
