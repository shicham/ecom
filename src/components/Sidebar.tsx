import { AlignJustify, Search } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import Thumbnail from "@/components/Thumbnail"
import Nav from "@/components/Nav"
export default function Sidebar() {
  return (
		<aside>
			<nav>
				<Thumbnail />
				<Nav />
			</nav>
		</aside>
  )
 };