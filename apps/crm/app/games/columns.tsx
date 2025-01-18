import type { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@ssp/ui"

import { DataTableColumnHeader } from "@/app/games/data-table-column-header"
import { DataTableRowActions } from "@/app/games/data-table-row-actions"
import type { Games } from "@/app/games/data/schema"

export const columns: Array<ColumnDef<Games>> = [
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
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Title' />,
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "apiId",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Api Id' />,
    cell: ({ row }) => <div>{row.getValue("apiId")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Description' />,
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "thumbnail",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Thumbnail' />,
    cell: ({ row }) => <div>{row.getValue("thumbnail")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]
