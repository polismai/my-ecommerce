//components
import TopBar from "../components/topbar/TopBar";
import Header from "../components/header/Header";
import HomeHeroCategories from "../components/homeHeroCategories/HomeHeroCategories";
import AdvantageSection from "../components/advantageSection/AdvantageSection";
import HomeProductsGrid from "../components/homeProductsGrid/HomeProductsGrid";
import CenteredLabel from "../components/centeredLabel/CenteredLabel";

//utilities
import { groupProductsByCategory } from "@/utils/groupProductsByCategory";

//images
import bannerNewSeason from "/public/hero-banner.jpg";
import bannerSale from "/public/banner-sale.jpg";
import Image from "next/image";

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
    <div className="min-h-screen flex flex-col p-4 sm:p-8">
      <header className="w-full">
        <TopBar />
      </header>

      <section className="w-full max-w-8xl text-center sm:text-left mb-8">
        <Header />
      </section>

      <main className="flex flex-col items-center sm:items-start gap-12 flex-grow">
        <section className="w-full max-w-[1110px] mx-auto">
          <HomeHeroCategories categories={categories} />
        </section>
          
        <section className="w-full max-w-[1110px] mx-auto">
          <AdvantageSection />
        </section>

        <section className="w-full max-w-[1110px] mx-auto">
          {Object.entries(productsGroupedByCategory).map(([category, products]) => {
            return (
              <div key={category} className="mb-16">
                <h2 className="text-sm md:text-lg font-bold uppercase mb-4 mt-0 mr-0 ml-4 md:mb-6 md:ml-0">{category}</h2>
                <HomeProductsGrid products={products} />
              </div>
            )
          })}
        </section>

        <section className="w-full max-w-[1110px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Image src={bannerNewSeason} alt="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <CenteredLabel>
                  <p className="text-sm text-gray-500">New Season</p>
                  <p className="text-lg font-bold">Lookbook collection</p>
                </CenteredLabel>
              </div>
            </div>
            <div className="relative">
              <Image src={bannerSale} alt="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <CenteredLabel>
                  <p className="text-sm text-gray-500">Sale</p>
                  <p className="text-lg font-bold">
                    Get up to{' '}
                    <span className="text-red-600">50% off</span>
                  </p>
                </CenteredLabel>
              </div>
            </div>
          </div>
        </section>    
      </main>
    </div>
  );
}
