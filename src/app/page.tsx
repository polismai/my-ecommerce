import { Heading } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

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

type Props = {
  products: Product[]
}

export default function Home({ products }: Props) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Heading as="h1">My Ecommerce</Heading>
        <ol>
        {products.map(product => {
          return <li key={product.id}>{product.title}</li>
        })}
        </ol>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
  return {
    props: { products
    }
  }
}