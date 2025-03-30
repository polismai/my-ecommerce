import { Product } from "@/app/page";
import { slugify } from "@/utils/slugify";

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
      <p>{product.description}</p>
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


