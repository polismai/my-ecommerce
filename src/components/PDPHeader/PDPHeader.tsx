import { ChevronRight, Share2 } from "lucide-react";
import Link from "next/link";
import RatingStars from "../ratingStars/RatingStars";
import { Product } from "@/app/page";

type Props = {
  product: Product;
}

export const PDPHeader = ({ product }: Props) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-[1110px] mx-auto">
        <div className="flex justify-between items-center">
          <ul className="flex text-sm m-0 gap-2">
            <li className="flex whitespace-nowrap">
              <Link href="/">Home</Link>
              <ChevronRight className="ml-2 w-4 h-4" />
            </li>
            <li className="capitalize flex whitespace-nowrap">
              <Link href={`/${product.category}`}>{product.category}</Link>
              <ChevronRight className="ml-2 w-4 h-4" />
            </li>
            <li className="truncate">{product.title}</li>
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
  );
}

export default PDPHeader;

