import type { ColumnDef } from "@tanstack/react-table"
import { Crown } from "lucide-react"

import { Checkbox } from "@ssp/ui"

import { DataTableColumnHeader } from "@/app/users/data-table-column-header"
import { DataTableRowActions } from "@/app/users/data-table-row-actions"
import type { Users } from "@/app/users/data/schema"
import { roles, vips } from "./data/data"

export const columns: Array<ColumnDef<Users>> = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!(value === true))
        }}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!(value === true))
        }}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "isVip",
    header: ({ column }) => <DataTableColumnHeader column={column} title='VIP' className='hidden' />,
    cell: ({ row }) => {
      const vip = vips.find((vip) => vip.value === row.getValue("isVip"))

      if (vip == null) {
        return null
      }

      if (vip.value === "true")
        return (
          <div className='flex items-center'>
            <Crown />
          </div>
        )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Email' />,
    cell: ({ row }) => (
      <div className='cursor-pointer text-artdevium-azure hover:underline'>
        <a href={`mailto:${row.getValue("email")}`} className='group'>
          {row.getValue("email")}
        </a>
      </div>
    ),
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "phone",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Phone Number' />,
    cell: ({ row }) => (
      <div className='cursor-pointer text-artdevium-azure hover:underline'>
        <a href={`tel:${row.getValue("phone")}`} className='group'>
          {row.getValue("phone")}
        </a>
      </div>
    ),
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Joined' />,
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "lastSignIn",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Last Sign In' />,
    cell: ({ row }) => <div>{row.getValue("lastSignIn")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Role' />,
    cell: ({ row }) => {
      const role = roles.find((role) => role.value === row.getValue("role"))

      if (role == null) {
        return null
      }

      return (
        <div className='flex items-center'>
          <span>{role.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]
