"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// const Products = async () => {
//   const URL = "https://dummyjson.com/products";
//   let productsData = [];

//   interface Product {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//   }

//   try {
//     const resp = await fetch(URL);
//     const data = await resp.json();
//     productsData = data.products || [];
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }

//   return (
//     <div>
//       <h1>Products List</h1>
//       {productsData.map((product: Product) => (
//         <h2 key={product.id}>{product.title}</h2>
//       ))}
//     </div>
//   );
// };

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const Products = () => {
  const URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await fetch(URL);
        const { products: data } = await resp.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
