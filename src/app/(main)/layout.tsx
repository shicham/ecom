import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="manager">
				<div className="page">
					<div className="main-container">
						<Header />
						<div className="flex grow overflow-auto relative z-[-2]">
							<Sidebar />
							{children}
						</div>
					</div>
				</div>
			</div>
  );
}
