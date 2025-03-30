import Link from "next/link";
import { Product } from "../../app/page";
import ProductCard from "../productCard/ProductCard";
import { slugify } from "@/utils/slugify";

type Props= {
  products: Product[];
}

export const HomeProductsGrid = ({ products }: Props) => {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(255px,1fr))] md:gap-7 grid-flow-row items-stretch auto-rows-fr">
      {products.map((product) => {
        const slug = slugify(product.title); 
        return (
          <div key={product.id} className="snap-center min-w-[255px] border border-solid border-gray-200 shadow-md p-4 first:ml-4 md:first:ml-0">
            <Link href={`/products/${slug}-${product.id}`}>
              <ProductCard {...product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomeProductsGrid;