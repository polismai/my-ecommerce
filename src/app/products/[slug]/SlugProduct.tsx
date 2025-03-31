import { Product } from "@/app/page";
import Button from "@/components/button/Button";
import RatingStars from "@/components/ratingStars/RatingStars";
import { slugify } from "@/utils/slugify";
import { Share2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export const ProductPage = async ({ params }: Props) => {

  const parts = params.slug.split("-");
  const productId = parts[parts.length - 1];

  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product: Product = await res.json();

  return (
    <div>
      <div className="bg-gray-100 p-4">
        <div className="max-w-[1110px] mx-auto">
            <div className="flex justify-between items-center">
              <ul className="flex text-sm m-0 gap-2">
                <li className="flex">
                  <Link href="/">Home</Link>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </li>
                <li className="capitalize flex">
                  <Link href={`/${product.category}`}>{product.category}</Link>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </li>
                <li>{product.title}</li>
              </ul>
              <button className="flex items-center gap-2 border border-gray-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          <h1 className="text-2xl font-bold my-6 text-center">{product.title}</h1>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <RatingStars rating={product.rating.rate} />
              <p className="text-sm">2 Reviews</p>
            </div>
            <div className="flex gap-4 text-sm">
              <p>Sku: <b>{product.id}</b></p>
              <p>Availability: <b>In Stock</b></p>
            </div>
          </div>
        </div>
      </div>
       <p>{product.price}</p>
       
       <p>{product.category}</p>
       <p>{product.description}</p>
       <Button>Add to Cart</Button>
       <div className="relative w-full aspect-square mb-4">
        <Image 
          src={product.image} 
          alt="" 
          className="object-contain w-full h-full"
          fill 
        />
      </div>
    </div>
  );
}

export default ProductPage;

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return products.map((product) => ({
    slug: `${slugify(product.title)}-${product.id}`,
  }));
}


