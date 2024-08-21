import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { TableFilterDropdown } from "@/components/table-filter-dropdown"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="en">
		<body className={cn(inter.className,"")}>
			{children}
		</body>
	</html>
  );
}
