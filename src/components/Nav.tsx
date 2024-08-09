import { Settings  } from 'lucide-react';
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area"
export default function Nav() {
  return (
    <div>
	    
		<div className="nav-menu">
		<ScrollArea className="h-[208px] w-[16rem]">
			<hr className="divider" />
			<ul>
				<li>
					<Link href="/home" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon" ><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M9 17H7V10H9V17ZM13 7H11V17H13V7ZM17 14H15V17H17V14ZM20 4H4V20H20V4ZM21 3V21H3V3H21Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
							</div>
						</div>
						<div className="item-text">
							Tableau de bord
						</div>
					</Link>
				</li>
				<li>
					<Link href="/settings" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Contenu
						</div>
					</Link>
				</li>
				<li>
					<Link href="/settings" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Données d'analyse
						</div>
					</Link>
				</li>
				<li>
					<Link href="/settings" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Commentaires
						</div>
					</Link>
				</li>
				<li>
					<Link href="/settings" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Sous-titres
						</div>
					</Link>
				</li>
				<li>
					<Link href="/settings" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Revenus
						</div>
					</Link>
				</li>
			</ul>
			</ScrollArea>
		</div>
		
		
		<div className="nav-menu">
			<hr className="divider" />
			<ul>
				<li>
					<Link href="/home" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Paramètres
						</div>
					</Link>
				</li>
				<li>
					<Link href="/settings" className="nav-item cursor-pointer">
						<div className="content-icon">
							<div className="item-icon">
								<Settings />
							</div>
						</div>
						<div className="item-text">
							Vos commentaires
						</div>
					</Link>
				</li>
			</ul>
		</div>
	</div>
  )
 };