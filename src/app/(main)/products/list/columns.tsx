"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from 'next/link'
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PlaylistTitle = {
	title: string
	description: string
}
export type Playlist = {
  id: string
  type: string
  visibilite: string
  title: string
  updatedAt: string
  countVideos: number
  description: string
}



export const columns: ColumnDef<Playlist>[] = [
  {
    accessorKey: "title",
    header: "Playlist",
	cell: ({ row }) => {
	   console.log(row)
		return (
			<div className="flex">
				<Link href="" className="mr-4">
					<div className="w-[120px] h-[68px] bg-[#e9e9e9] rounded-lg flex items-center justify-center ">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images w-[35px] h-[35px]"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
					</div>
				</Link>
				<div>
					<h3 className="text-1xs font-normal text-[var(--text-primary)] mt-3.5">{row.getValue("title")}</h3>
					<div className="text-xs text-[var(--text-disabled)]">{row.original.description}</div>
				</div>
			</div>
		)
	}
  },{
    accessorKey: "type",
    header: "Type",
	cell: ({ row }) => {
		return (
			<div className="flex">
					<h3 className="text-1xs font-normal text-[var(--text-primary)] mt-3.5">{row.getValue("type")}</h3>
			</div>
		)
	}
  },
  {
    accessorKey: "visibilite",
    header: "Visibilité",
	cell: ({ row }) => {
		return (
			<div className="flex">
					<h3 className="text-1xs font-normal text-[var(--text-primary)] mt-3.5">{row.getValue("visibilite")}</h3>
			</div>
		)
	}
  },
  {
    accessorKey: "updatedAt",
    header: "Dernière MAAJ.",
	cell: ({ row }) => {
		return (
			<div className="flex">
					<h3 className="text-1xs font-normal text-[var(--text-primary)] mt-3.5">{row.getValue("updatedAt")}</h3>
			</div>
		)
	}
  },
  {
    accessorKey: "countVideos",
    header: "Nombre de vidéos",
	cell: ({ row }) => {
	  //const cat: Category = row.getValue("category")
      return (
        <div className="flex">
          <span className="mt-3.5">
		     
            {row.getValue("countVideos")}
          </span>
        </div>
      )
    }
  }
]
