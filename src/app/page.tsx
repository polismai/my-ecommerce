import TopBar from "../components/topbar/TopBar";
import Header from "../components/header/Header";

import { slugify } from "../utils/slugify";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
}

export default async function Home() {
  const resProducts = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await resProducts.json();

  const resCategories = await fetch("https://fakestoreapi.com/products/categories");
  const categories: string[] = await resCategories.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TopBar />
        <Header />

        <div className="grid grid-cols-[540px_255px_255px] md:grid-cols-3 grid-rows-[200px_260px] gap-4">
          {categories.map((cat, key) => {
            const slug = slugify(cat);
            const imageUrl = `/pic-categories-${slug}.jpg`;

            return (
              <div
                key={key}
                className={`w-full h-full bg-blue-500 flex items-center justify-center relative 
                  ${key === 0 ? "row-span-2" : ""}
                  ${key === categories.length - 1 ? "col-span-2" : ""}`}
              >
                <Image src={imageUrl} fill={true} alt={cat}/>
              </div>
            );
          })}
        </div>
        
        <ol>
        {products.map(product => {
          return <li key={product.id}>{product.title}</li>
        })}
        </ol>
      </main>
    </div>
  );
}
