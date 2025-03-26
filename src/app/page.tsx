//components
import TopBar from "../components/topbar/TopBar";
import Header from "../components/header/Header";
import HomeHeroCategories from "../components/homeHeroCategories/HomeHeroCategories";
import AdvantageSection from "../components/advantageSection/AdvantageSection";

//utilities
import { GroupedProducts, groupProductsByCategory } from "@/utils/groupProductsByCategory";
import HomeProductsGrid from "@/components/homeProductsGrid/HomeProductsGrid";

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

type Props = {
  products: Product[];
  productsGroupedByCategory: GroupedProducts;
}

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
      </main>
    </div>
  );
}
