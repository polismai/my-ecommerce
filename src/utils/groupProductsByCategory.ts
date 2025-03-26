import { Product } from "../app/page";

export type GroupedProducts = {
  [key: string]: Product[];
};

export function groupProductsByCategory(products: Product[]) {
  if (!products) {
    throw new Error("products array is undefined or null");
  }

  const groups: GroupedProducts = {};

  for (const product of products) {
    if (!product) {
      throw new Error("Product is undefined or null");
    }

    const category = product.category;

    if (!category) {
      throw new Error("Product category is undefined or null");
    }

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(product);
  }
  
  return groups;
}