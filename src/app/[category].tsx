import { HeaderSecondary } from "@/components/headerSecondary/HeaderSecondary";
import { ProductsGrid } from "@/components/productsGrid/ProductsGrid";
import getPriceFilterRanges from "@/utils/getPriceFilterRanges";

import { ChangeEvent, useState } from "react";
import { Product } from "./page";

type Props = {
  products: Product[];
  category: string;
};

type FilteredProducts = {
  products: Product[];
  filtered: 'IDLE' | 'FILTERED';
};

export const Category = ({ products, category }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<FilteredProducts>({
    products: [],
    filtered: 'IDLE',
  });

  const rangeOptions = getPriceFilterRanges(products.map((p) => p.price));

  function onFilterSelected(e: ChangeEvent<HTMLSelectElement>) {
    const [min, max] = e.target.value.split('-').map(parseFloat);
  
    const filtered = products.filter((p) => p.price >= min && p.price <= max);

    setFilteredProducts({
      products: filtered,
      filtered: filtered.length > 0 ? "FILTERED" : "IDLE",
    });
  }

  const emptyFilter =
    filteredProducts.filtered === "FILTERED" && filteredProducts.products.length === 0;
  const data = filteredProducts.products.length ? filteredProducts.products : products;

  return (
    <>
      <HeaderSecondary
        breadCrumb={[
          {
            href: "/",
            text: category,
          },
        ]}
      />
      <div className="mt-12">
        <select
          onChange={onFilterSelected}
          className="w-48 mb-8 p-2 border border-gray-300 rounded"
        >
          {rangeOptions.map(({ label, value: { max, min } }, key) => (
            <option value={`${min}-${max}`} key={key}>
              {label}
            </option>
          ))}
        </select>
        {emptyFilter ? (
          <h3>No products in this filter</h3>
        ) : (
          <ProductsGrid products={data} />
        )}
      </div>
    </>
  );
};

export default Category;

