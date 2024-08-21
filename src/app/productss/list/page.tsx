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
      title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "10 avr. 2024",
	  countVideos: 65
    },
	{
      id: "345T4564",
		title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Private",
	  updatedAt: "11 jul. 2024",
	  countVideos: 89
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
      title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
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
      title:"free musique",
		description:"free musique",
      type: "Playlist",
	  visibilite: "Publique",
	  updatedAt: "12 avr. 2024",
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
