
"use client"
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Home() {

  interface ProductData {
    data: Array<{ id: number; attributes: any }>;
  }

  const [data, setData] = useState<ProductData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://blessed-books-6bae6d42bb.strapiapp.com/api/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(data?.data[1]);
    fetchData();
  }, []);
  if (data) {
    console.log(data.data [0]);
  }
  return (



  <div>
  {data?.data.map((product) => (
    <div key={product.id}>
      <h2>{product.id}</h2>
      {/* <p>{product.attributes.description}</p>
      <p>Price: ${product.attributes.price}</p> */}
    </div>
  ))}
  </div>
  );
}
