import { Menu } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image'
export default function Header({ user, type = 'desktop', menuItems }) {
  return (
		<header>
			<Link href="" className="p-2 mr-4 border-2 border-2 border-transparent rounded-full text-primary w-6 h-6 inline-flex relative">
				
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
			</Link>
			<div className="flex mr-24 mt-2 ml-0">
				<Link href=""><Image src='/logo.svg' width={100} height={24}/></Link>
			</div>
			<div>
			abcd
			</div>
			
		</header>
  )
 };