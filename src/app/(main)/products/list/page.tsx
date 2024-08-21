"use client"
import * as React from "react"
import Image from "next/image";

import { Playlist, columns } from "./columns"



import { ProductList } from "./list"


export default  function Home() {
  const [products, setProducts] = React.useState<Playlist[]>([] as any);
  React.useEffect(() => { getData().then(rs => {setProducts(rs as Playlist[])}) })
  async function getData(): Promise<Playlist[]> {
  return [
    {
      id: "345T4564",
      title:"BEST SONGS OF 2024!",
	  description:"Most viewed SONGS ON YOUTUBE ( UP 2024 )",
      type: "Playlist",
	  visibilite: "Private",
	  updatedAt: "13 avr. 2024",
	  countVideos: 1063175
    },
	{
      id: "45456743",
      title:"Chanson Francaise 2024 Nouveauté",
	  description:"Chansons Françaises 2024 Tubes De L'été",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
	  countVideos: 86123409
    },
	{
      id: "345T4564",
      title:"La Hit List",
		description:"Un condensé des plus gros hits du moment.",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "04 mai 2024",
	  countVideos: 405900
    },
	{
      id: "345T4564",
		title:"Destination été 2024",
		description:"Des tracks bouillants qui feront votre été.",
      type: "Playlist",
	  visibilite: "Private",
	  updatedAt: "19 jul. 2023",
	  countVideos: 940054
    },
	{
      id: "345T4564",
      title:"Non-stop booty shake",
	  description:"Des sons bouillants d'ici et de là-bas pour faire monter la température",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
	  countVideos: 120054
    },
	{
      id: "345T4564",
      title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
	  countVideos: 12
    },
	{
      id: "345T4564",
      title:"Crème French Pop",
		description:"Retrouvez ici le meilleur de la pop française du moment.",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "25 jul. 2023",
	  countVideos: 7005467
    },
	{
      id: "345T4564",
      title:"Le mix productif",
	  description:"Des tracks hypnotiques pour une concentration optimale.",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 jul. 2023",
	  countVideos: 5600654
    },
	{
      id: "345T4564",
      title:"Rap : la relève",
		description:"Les incontournables de la nouvelle génération du Rap Français.",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "04 jun. 2023",
	  countVideos: 12
    },
	{
      id: "345T4564",
      title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
	  countVideos: 12
    },
	{
      id: "728ed52f",
      title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
	  countVideos: 12
    },
  ]
  
}
 async function getDatas() {
	const products: Playlist[] = await getData()
	return products
 }
  //const products = await getData()
  return (
						<div>
							<ProductList data={products} columns={columns}/>
						</div>
					
		
	
  );
}
