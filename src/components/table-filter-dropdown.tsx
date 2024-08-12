"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
type Checked = DropdownMenuCheckboxItemProps["checked"]
interface Item {
  label: string
  selected: boolean
}
interface ItemsProps {
  items: Item[]
}
export function TableFilterDropdown({items}:ItemsProps) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-[var(--text-secondary)] bg-white border border-[#ccc] shadow-none rounded-lg h-10 pl-3 pr-0 text-1xs font-roboto font-normal whitespace-nowrap text-ellipsis hover:bg-white hover:border-black">
			Sélectionner une status
			<ChevronDown className="ml-4 mr-3 w-5 h-5"/>
		</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 listbox text-primary rounded-xl ">
	    {items.map((item) => (
        <DropdownMenuCheckboxItem checked={item.selected} onCheckedChange={setShowStatusBar} key={item.label} className="text-1xs font-normal"
          
        >
          {item.label}
        </DropdownMenuCheckboxItem>
		))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
