//components
import TopBar from "../components/topbar/TopBar";
import Header from "../components/header/Header";
import HomeHeroCategories from "../components/homeHeroCategories/HomeHeroCategories";
import AdvantageItem from "@/components/advantageItem/AdvantageItem";

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
          
        <section className="w-full max-w-[1110px] mx-auto flex justify-between my-8">
          <AdvantageItem title="Free Shipping" content="On all UA order or order above $100" icon="/icon-truck.svg" />
          <AdvantageItem title="30 days return" content="Simply return it within 30 days for an exchange" icon="/icon-return.svg" />
          <AdvantageItem title="Support 24/7" content="Contact us 24 hours a day, 7 days a week" icon="/icon-support.svg" />
        </section>

        <section className="w-full max-w-[1110px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Productos Destacados</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <li
                key={product.id}
                className="border rounded-lg p-4 shadow-md flex flex-col items-center"
              >
                <h3 className="text-lg font-medium">{product.title}</h3>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
