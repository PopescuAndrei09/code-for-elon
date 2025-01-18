import type { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@ssp/ui"

import { DataTableColumnHeader } from "@/app/casino/data-table-column-header"
import { DataTableRowActions } from "@/app/casino/data-table-row-actions"
import type { Casinos } from "@/app/casino/data/schema"

export const columns: Array<ColumnDef<Casinos>> = [
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
    accessorKey: "href",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Href' />,
    cell: ({ row }) => <div>{row.getValue("href")}</div>,
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
    accessorKey: "promoCode",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Promo Code' />,
    cell: ({ row }) => <div>{row.getValue("promoCode")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Payment Method' />,
    cell: ({ row }) => <div>{row.getValue("paymentMethod")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "wager",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Wager' />,
    cell: ({ row }) => <div>{row.getValue("wager")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "bonusType",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Bonus Type' />,
    cell: ({ row }) => <div>{row.getValue("bonusType")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: "casinoType",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Casino Type' />,
    cell: ({ row }) => <div>{row.getValue("casinoType")}</div>,
    enableSorting: true,
    enableHiding: true
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]
