import { AlignJustify, Search } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
export default function Header() {
  return (
		<header>
			<Link href="" className="p-2 pl-0  mr-2 border-2 border-2 border-transparent rounded-full text-primary w-10 h-10 inline-flex relative">
				
				<AlignJustify />
			</Link>
			<div className="flex mr-24 mt-2 ml-0">
				<Link href=""><Image alt="logo" src='/logo.svg' width={100} height={24}/></Link>
			</div>
			<div className="header-search">
				<div className="search-layer">
					<div className="absolute top-[10px] left-6 inline-flex items-center justify-center"><Search /></div>
					<div>
						<form className="m-0">
							<input type="text" name="name" className="h-10 font-normal text-base bg-zinc-100 rounded-[20px] border w-full text-clip pb-0.5 px-14 outline-none box-border"/>
						</form>
					</div>
				</div>
				
			</div>
			<div className="flex flex-1 items-center justify-end">
				<Avatar className="roundedxxl">
				  <AvatarImage src="/img1.png" alt="@shadcn" />
				  <AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</header>
  )
 };