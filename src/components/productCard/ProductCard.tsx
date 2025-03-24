import { Product } from "../../app/page";
import Image from "next/image";

export const ProductCard = ({ image, title, price, rating }: Product) => {
  return (
    <div className="w-full border border-solid border-gray-100 p-4">
      <div className="relative w-full aspect-square mb-4">
        <Image 
          src={image} 
          alt="" 
          className="object-contain w-full h-full"
          fill 
        />
      </div>
      <p className="text-gray-500 mb-3 line-clamp-2">{title}</p>
      <div className="flex items-center justify-between">
        <p className="font-bold">{price}</p>
        {/* <div className="flex gap-1">
          <StarIcon color={"orange"} />
          <StarIcon color={"orange"} />
          <StarIcon color={"orange"} />
          <StarIcon color={"orange"} />
          <StarIcon color={"gray-300"}/>
        </div> */}
      </div>
    </div>
  )
}

export default ProductCard;

