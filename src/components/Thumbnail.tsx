import { AlignJustify, Search } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
export default function Thumbnail() {
  return (
		<div className="flex-0 flex  relative h-[208px] overflow-hidden thumbnail-wrapper ">
			<Link href=""className="image-thumbnail ">
				<Image src="/img1.png" alt="@shadcn" width={112} height={112} />
			</Link>
			<div className="store-label-container">
				<div className="store-type">Votre chaîne</div>
				<div className="store-name">sassa hicham</div>
			</div>
		</div>
  )
 };