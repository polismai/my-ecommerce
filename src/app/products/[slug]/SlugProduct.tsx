import { Product } from "@/app/page";
import Button from "@/components/button/Button";
import { slugify } from "@/utils/slugify";
import Image from "next/image";

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
       <h1>{product.title}</h1>
       <p>{product.price}</p>
       <p>{product.rating.count}, {product.rating.rate}</p>
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


