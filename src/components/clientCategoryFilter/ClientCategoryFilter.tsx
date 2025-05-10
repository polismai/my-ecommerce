'use client';

import { useState, ChangeEvent } from 'react';
import { ProductsGrid } from "@/components/productsGrid/ProductsGrid";
import { Product } from '@/app/page';


type Props = {
  products: Product[];
  rangeOptions: {
    label: string;
    value: { min: number; max: number };
  }[];
};

export const ClientCategoryFilter = ({ products, rangeOptions }: Props) => {
  const [filtered, setFiltered] = useState<Product[] | null>(null);

  function onFilterSelected(e: ChangeEvent<HTMLSelectElement>) {
    const [min, max] = e.target.value.split('-').map(Number);
    if (!isNaN(min) && !isNaN(max)) {
      const result = products.filter((p) => p.price >= min && p.price <= max);
      setFiltered(result);
    } else {
      setFiltered(null);
    }
  }

  const displayProducts = filtered ?? products;

  return (
    <>
      <select
        onChange={onFilterSelected}
        className="w-52 mb-8 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select option</option>
        {rangeOptions.map(({ label, value }, key) => (
          <option key={key} value={`${value.min}-${value.max}`}>
            {label}
          </option>
        ))}
      </select>

      {!displayProducts.length ? (
        <h3 className="text-xl font-semibold text-gray-600">No products in this filter</h3>
      ) : (
        <ProductsGrid products={displayProducts} />
      )}
    </>
  );
};
