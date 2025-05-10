import type { Product as ProductType } from "@/app/page";
import Button from "@/components/button/Button";
import Divider from "@/components/divider/Divider";
import PDPHeader from "@/components/PDPHeader/PDPHeader";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import { Truck, RefreshCcw, Mail } from "lucide-react";
import Link from "next/link";
import logo_visa from "/public/logo_visa.png";
import logo_mastercard from "/public/logo_mastercard.png";
import logo_paypal from "/public/logo_paypal.png";
import logo_discover from "/public/logo_discover.png";
import logo_stripe from "/public/logo_stripe.png";
import logo_aes from "/public/logo_aes256.png";
import logo_amex from "/public/logo_amex.png";
import ProductsGrid from "@/components/productsGrid/ProductsGrid";

interface Props {
  params: {
    slug: string;
  };
}

function Price({ price }: { price: number }) {
  const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    return <p className="font-bold text-xl">{currency}</p>;
  }

export const ProductPage = async ({ params }: Props) => {

  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  
  const parts = params.slug.split("-");
  const productId = parseInt(parts[parts.length - 1]);

  const product: ProductType | undefined = products.find((product: ProductType) => {
    return product.id === productId;
  });

  const relatedProducts = products.filter((item: ProductType) => {
    return item.category === product?.category && item.id !== product?.id;
  });

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Product not found
      </div>
    );
  }  

  return (
    <div>
     <PDPHeader product={product}/>
     <div className="mx-auto px-4 max-w-[1110px] mt-8">
      <div className="grid grid-cols-[1fr_34.25rem] gap-6 mb-24">
        <div className="relative w-full aspect-square mb-4">
          <Image 
            src={product.image} 
            alt="" 
            className="object-contain"
            fill 
          />
        </div>
        <div>
          <h3 className="font-bold uppercase text-gray-500 mb-2 text-sm">Description</h3>
          <p>{product.description}</p>
          <div className="my-8">
            <Divider />
          </div>
          <div className="flex items-center gap-6">
            <Price price={product.price} />
            <Button>Add to Cart</Button>
            <Link href="#">
              <Image src="/ico-like.svg" alt="" width="24" height="24" />
            </Link>
            <Link href="#">
              <Image src="/ico-legal.svg" alt="" width="24" height="24" />
            </Link>
          </div>
          <div className="my-8">
            <Divider />
          </div>
          <div className="flex justify-between text-sm mb-8">
            <Link href="#" className="flex gap-1 items-center">
              <Truck className="w-6 h-6" /> Shipping & Delivery
            </Link>
            <Link href="#" className="flex gap-1 items-center">
              <RefreshCcw className="w-6 h-6" /> Returns & Exchanges
            </Link>
            <Link href="#" className="flex gap-1 items-center">
              <Mail className="w-6 h-6" /> Ask a question
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <h3 className="uppercase font-bold text-gray-500 whitespace-nowrap">
              Guaranteed Safe Checkout
            </h3>
            <div className="flex-1">
              <Divider />
            </div>
          </div>
          <div className="flex justify-between mt-6 mb-8">
            <Image src={logo_stripe} className="w-10 h-auto object-contain" alt="" />
            <Image src={logo_aes} className="w-10 h-auto object-contain" alt="" />
            <Image src={logo_visa} className="w-10 h-auto object-contain" alt="" />
            <Image src={logo_mastercard} className="w-10 h-auto object-contain" alt="" />
            <Image src={logo_paypal} className="w-12 h-auto object-contain" alt="" />
            <Image src={logo_discover} className="w-12 h-auto object-contain" alt="" />
            <Image src={logo_amex} className="w-10 h-auto object-contain" alt="" />
          </div>
          <Divider />
        </div>
      </div>
      <div>
        <h3 className="uppercase font-bold text-gray-500 mb-8">
          Related Products
        </h3>
        <ProductsGrid products={relatedProducts}/>
      </div>
     </div>
    </div>
  );
}

export default ProductPage;

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return products.map((product) => ({
    slug: `${slugify(product.title)}-${product.id}`,
  }));
}

