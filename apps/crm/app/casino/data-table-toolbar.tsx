import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import type { Table } from "@tanstack/react-table"

import { Button, Input } from "@ssp/ui"

import { DataTableViewOptions } from "@/app/casino/data-table-view-options"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>): React.JSX.Element {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='search by title'
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] lg:w-[250px]'
        />

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => {
              table.resetColumnFilters()
            }}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
