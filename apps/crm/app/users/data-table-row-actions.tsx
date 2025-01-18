import * as React from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import type { Row } from "@tanstack/react-table"
import { UserAccountForm } from "app/users/user-account-form"
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Separator
} from "@ssp/ui"
import { userSchema } from "@ssp/utils"

import { roles } from "@/app/users/data/data"
import { clientApi } from "@/trpc/client"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>): React.JSX.Element {
  const user = userSchema.parse(row.original)
  const [openDialogEdit, setOpenDialogEdit] = React.useState<boolean>(false)
  const [openDialogDelete, setOpenDialogDelete] = React.useState<boolean>(false)
  const [, startTransition] = React.useTransition()
  const handleEdit = () => {
    setOpenDialogEdit(true)
  }

  const utils = clientApi.useUtils()

  const handleRoleClick = (role: string) => () => {
    startTransition(async () => {
      try {
        await updateMeRole.mutateAsync({ id: user.id, role: role as "user" | "admin" | "manager" | "editor" })
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    })
  }

  const updateMeRole = clientApi.user.updateRole.useMutation({
    onSuccess: () => {
      toast.success("The user role been updated with success. 🎉")
      utils.user.getAll.invalidate()
    }
  })

  const handleDelete = (confirm: boolean) => {
    setOpenDialogDelete(true)
    if (confirm) {
      startTransition(async () => {
        try {
          await deleteUser.mutateAsync({ id: user.id })
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message)
          }
        }
      })
    }
  }

  const deleteUser = clientApi.user.deleteUser.useMutation({
    onSuccess: () => {
      toast.success("The user has been deleted with success. 🎉")
      setOpenDialogDelete(false)
      utils.user.getAll.invalidate()
    }
  })

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
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Role</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={user.email}>
                {roles.map((label) => (
                  <DropdownMenuRadioItem key={label.value} value={label.value} onClick={handleRoleClick(label.value)}>
                    {label.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleDelete(false)}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={openDialogDelete} onOpenChange={setOpenDialogDelete}>
        <DialogContent className='no-scrollbar  max-h-96 max-w-2xl overflow-auto p-10'>
          <DialogHeader className='sticky '>
            <DialogTitle>Delete user</DialogTitle>
            <DialogDescription>This action is irreversible, be sure you choose the correct user.</DialogDescription>
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
      <Dialog open={openDialogEdit} onOpenChange={setOpenDialogEdit}>
        <DialogContent className='no-scrollbar  max-h-[800px] max-w-6xl overflow-auto p-10'>
          <DialogHeader className='sticky '>
            <DialogTitle>Edit user profile</DialogTitle>
            <DialogDescription>Make changes to user profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <Separator className='my-6' />
          <UserAccountForm data={user} setOpenDialogEdit={setOpenDialogEdit} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
