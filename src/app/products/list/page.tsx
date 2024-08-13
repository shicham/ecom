import Image from "next/image";

import { Product, columns } from "./columns"
async function getData(): Promise<Product[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      title: "Aspirateur sans fil portable",
	  category: {
		id:"34543576a3ER",
		title: "Apparel & Accessoriesc"
	  },
	  vendor: "Ali express",
	  orders: 23
    },
	{
      id: "728ed52f",
      amount: 454,
      status: "processing",
      title: "Anneau de Yoga et de Pilates pour femme et fille",
	  category: {
		id:"34543576a3ER",
		title: "Apparel & Accessories"
	  },
	  vendor: "Amazon",
	  orders: 12
    },
	{
      id: "728ed52f",
      amount: 454,
      status: "processing",
      title: "Pilates pour femme et fille",
	  category: {
		id:"34543576a3ER",
		title: "Pilates de Yoga"
	  },
	  vendor: "Amazon",
	  orders: 12
    },
  ]
}


import { ProductList } from "./list"


export default async function Home() {
  const products = await getData()
  return (
    
						<div>
							<ProductList data={products} columns={columns}/>
						</div>
					
		
	
  );
}
