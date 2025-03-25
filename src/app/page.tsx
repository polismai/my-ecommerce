//components
import TopBar from "../components/topbar/TopBar";
import Header from "../components/header/Header";
import HomeHeroCategories from "../components/homeHeroCategories/HomeHeroCategories";
import AdvantageSection from "../components/advantageSection/AdvantageSection";
import ProductCard from "../components/productCard/ProductCard";

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

export default async function Home() {
  const resProducts = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await resProducts.json();

  const resCategories = await fetch("https://fakestoreapi.com/products/categories");
  const categories: string[] = await resCategories.json();

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
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(255px,1fr))] md:gap-7 grid-flow-row items-stretch auto-rows-fr">
            {products.map((product) => (
              <div key={product.id} className="snap-center min-w-[255px] border border-solid border-gray-200 shadow-md p-4 first:ml-4 md:first:ml-0">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>    
      </main>
    </div>
  );
}
