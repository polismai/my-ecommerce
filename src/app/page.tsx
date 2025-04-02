//components
import HomeHeroCategories from "../components/homeHeroCategories/HomeHeroCategories";
import AdvantageSection from "../components/advantageSection/AdvantageSection";
import HomeProductsGrid from "../components/productsGrid/ProductsGrid";
import PromoBanner from "../components/promoBanner/PromoBanner";
import Button from "../components/button/Button";

//utilities
import { groupProductsByCategory } from "@/utils/groupProductsByCategory";

//images
import Image from "next/image";
import bannerSale from "/public/banner-sale.jpg";
import bannerNewSeason from "/public/hero-banner.jpg";
import womenStanding from "/public/woman-removebg-preview.png";
import menWalking from "/public/men-removebg-preview.png";


export type Product = {
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

// type Props = {
//   products: Product[];
//   productsGroupedByCategory: GroupedProducts;
// }

export default async function Home() {
  const resProducts = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await resProducts.json();

  const resCategories = await fetch("https://fakestoreapi.com/products/categories");
  const categories: string[] = await resCategories.json();
  const productsGroupedByCategory = groupProductsByCategory(products);

  return (
    <div className="min-h-screen flex flex-col p-4">
      <main className="flex flex-col items-center sm:items-start gap-12 flex-grow mt-8">
        <section className="w-full max-w-[69.375rem] mx-auto">
          <HomeHeroCategories categories={categories} />
        </section>
          
        <section className="w-full max-w-[69.375rem] mx-auto">
          <AdvantageSection />
        </section>

        <section className="w-full max-w-[69.375rem] mx-auto">
          {Object.entries(productsGroupedByCategory).map(([category, products]) => {
            return (
              <div key={category} className="mb-16">
                <h2 className="text-sm md:text-lg font-bold uppercase mb-4 mt-0 mr-0 ml-4 md:mb-6 md:ml-0">{category}</h2>
                <HomeProductsGrid products={products} />
              </div>
            )
          })}
        </section>

        <section className="w-full max-w-[69.375rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PromoBanner image={bannerNewSeason}>
              <p className="text-sm text-gray-500">New Season</p>
              <p className="text-lg font-bold">Lookbook collection</p>
            </PromoBanner> 
            <PromoBanner image={bannerSale}>
              <p className="text-sm text-gray-500">Sale</p>
              <p className="text-lg font-bold">
                Get up to{' '}
                <span className="text-red-600">50% off</span>
              </p>
            </PromoBanner> 
          </div>
        </section> 

        <section className="w-full max-w-full">
          <div className="bg-gradient-to-b from-[#F3F2F2] to-[#DCDBDB] mt-[14.75rem] md:my-8 md:mx-auto p-6 md:p-[3.55rem] relative">
            <div className="absolute w-32 md:w-[311px] h-[242px] md:h-[545px] top-[calc(-242px+1.5rem)] md:top-auto md:bottom-0 left-6 md:left-1/2 md:transform md:translate-x-[-530px]">
              <Image 
                src={womenStanding} 
                alt="" 
                fill
                className="object-contain md:object-cover" 
              />
            </div>
            <div className="absolute w-[99px] md:w-[219px] h-[236px] md:h-[524px] top-[calc(-236px+1.5rem)] md:top-auto md:bottom-0 right-8 md:right-1/2 md:transform md:translate-x-[470px]">
              <Image 
                src={menWalking} 
                alt="" 
                fill
                className="object-contain md:object-cover" 
              />
            </div>
            <article className="bg-white flex md:h-[28.75rem] p-8 text-center max-w-[33.25rem] m-auto">
              <div className="grid gap-8 max-w-[22rem] m-auto text-center">
                <header>
                  <h3 className="text-sm uppercase text-gray-400">Special Offer</h3>
                  <h2 className="text-2xl uppercase flex flex-col">
                    <span>Subscribe and</span>
                    <span className="text-red-600">get 10% off</span>
                  </h2>
                </header>

                <form action="" className="grid gap-6">
                  <div className="grid">
                    {/* <label>Email adress</label> */}
                    <input 
                      type="email"
                      placeholder="Enter your email" 
                      className="text-center border border-gray-300 bg-gray-100 h-16"
                    />
                  </div>
                  <Button size="xl">Subscribe</Button>
                </form>
              </div>
            </article>
          </div>
        </section>   
      </main>
    </div>
  );
}

            