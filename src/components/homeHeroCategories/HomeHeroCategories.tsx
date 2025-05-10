//utilities
import Link from "next/link";
import { slugify } from "../../utils/slugify";

//components
import CenteredLabel from "../centeredLabel/CenteredLabel";
import { Categories } from "@/models/Categories";

//next
import Image from "next/image";

type Props = {
  categories: Categories[];
};

export const HomeHeroCategories = ({ categories }: Props) => {
  return (
    <div 
      className="
        grid grid-cols-2 
        grid-rows-[130px_154px_130px] 
        md:grid-cols-[2fr_1fr_1fr] 
        md:grid-rows-[200px_260px]
        gap-2 md:gap-4 lg:gap-8
      "
    >
      {categories.map((cat, index) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;

        return (
          <Link
            href={`/category/${encodeURIComponent(cat)}`}
            key={index}
            className={`
              relative w-full h-full block
              ${index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
              ${index === categories.length - 1 ? "col-span-2 md:col-span-2 md:col-start-2": ""}
            `}
          >
            <Image 
              src={imageUrl} 
              className="object-cover" 
              fill={true} 
              alt={cat} />
            <div className="flex items-center justify-center h-full">
              <CenteredLabel>{cat}</CenteredLabel>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default HomeHeroCategories;