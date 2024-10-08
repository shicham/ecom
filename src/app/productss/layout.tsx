import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prodcts",
  description: "Generated by create next app",
};
import { ScrollArea } from "@/components/ui/scroll-area"
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<ScrollArea className="w-full z-[9999] anim">
	
		<div className="flex grow flex-col min-w-0 z-[0]">
			<div className="page-title ">
				<div className="flex relative min-h-12 text-1xl shrink left-0 pl-8 pt-[23px] sticky whitespace-nowrap z-[1] bg-white">
					<h1 className="text-clip font-roboto font-semibold">Contenu de la chaîne</h1>
				</div>
			</div>
		{children}
		</div>
	
	</ScrollArea>
	)
}
