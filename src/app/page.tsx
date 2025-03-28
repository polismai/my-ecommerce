//components
import TopBar from "../components/topbar/TopBar";
import Header from "../components/header/Header";
import HomeHeroCategories from "../components/homeHeroCategories/HomeHeroCategories";
import AdvantageSection from "../components/advantageSection/AdvantageSection";
import HomeProductsGrid from "../components/homeProductsGrid/HomeProductsGrid";
import PromoBanner from "../components/promoBanner/PromoBanner";

//utilities
import { groupProductsByCategory } from "@/utils/groupProductsByCategory";

//images
import bannerSale from "/public/banner-sale.jpg";
import bannerNewSeason from "/public/hero-banner.jpg";

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
          <div className="bg-gradient-to-b from-[#F3F2F2] to-[#DCDBDB] my-8 p-6">
            <article className="bg-white p-8 text-center max-w-[33rem] m-auto">
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
                  <button className="bg-black size-full h-16 uppercase text-white">Subscribe</button>
                </form>
              </div>
            </article>
          </div>
        </section>   
      </main>
    </div>
  );
}

            