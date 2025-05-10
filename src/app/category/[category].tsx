import { HeaderSecondary } from "@/components/headerSecondary/HeaderSecondary";
import { getPriceFilterRanges } from "@/utils/getPriceFilterRanges";
import { Product } from "../page";
import { ClientCategoryFilter } from "@/components/clientCategoryFilter/ClientCategoryFilter";

type Props = {
  params: { category: string };
};

async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(decodeURIComponent(params.category));

  if (!products.length) {
    return <h1 className="text-center mt-10 text-xl text-red-500">No products found</h1>;
  }

  const rangeOptions = getPriceFilterRanges(products.map((p) => p.price));

  // Acá podrías delegar el filtro al cliente
  return (
    <>
      <HeaderSecondary
        breadcrumb={[
          {
            href: "/",
            text: params.category,
          },
        ]}
      />
      <div className="max-w-7xl mx-auto mt-12 px-4">
        {/* Pasás los filtros y productos a un componente cliente */}
        <ClientCategoryFilter products={products} rangeOptions={rangeOptions} />
      </div>
    </>
  );
}


// type Props = {
//   products: Product[];
//   category: string;
// };

// type FilteredProducts = {
//   products: Product[];
//   filtered: 'IDLE' | 'FILTERED';
// };

// export const Category = ({ products, category }: Props) => {
//   const [filteredProducts, setFilteredProducts] = useState<FilteredProducts>({
//     products: [],
//     filtered: 'IDLE',
//   });

//   const rangeOptions = getPriceFilterRanges(products.map((p) => p.price));

//   function onFilterSelected(e: ChangeEvent<HTMLSelectElement>) {
//     const [min, max] = e.target.value.split('-');
  
//     if (min || max) {
//       const filtered = products.filter((p) => p.price >= parseFloat(min) && p.price <= parseFloat(max));

//       setFilteredProducts({
//         products: filtered,
//         filtered: 'FILTERED',
//       });
//     } else {
//       setFilteredProducts({
//         products: [],
//         filtered: 'IDLE',
//       });
//     }
//   }

//   const emptyFilter = filteredProducts.filtered === "FILTERED" && !filteredProducts.products.length;
//   const data = filteredProducts.products.length ? filteredProducts.products : products;

//   return (
//     <>
//       <HeaderSecondary
//         breadcrumb={[
//           {
//             href: "/",
//             text: category,
//           },
//         ]}
//       />
//       <div className="max-w-7xl mx-auto mt-12 px-4">
//         <select
//           onChange={onFilterSelected}
//           className="w-52 mb-8 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">Select option</option>
//           {rangeOptions.map(({ label, value: { max, min } }, key) => (
//             <option value={`${min}-${max}`} key={key}>
//               {label}
//             </option>
//           ))}
//         </select>

//         {emptyFilter ? (
//           <h3 className="text-xl font-semibold text-gray-600">
//             No products in this filter
//           </h3>
//         ) : (
//           <ProductsGrid products={data} />
//         )}
//       </div>
//     </>
//   );
  
// };

// export default Category;

