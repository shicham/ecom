"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  title: string
  vendor: string
  orders: number
  category: object
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },{
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "orders",
    header: "Orders",
  },
  {
    accessorKey: "category",
    header: "Category",
	cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      )
    }
  }
]
