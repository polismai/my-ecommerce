//utilities
import { slugify } from "../../utils/slugify";

//components
import CenteredLabel from "../centeredLabel/CenteredLabel";

//next
import Image from "next/image";

type Props = {
  categories: string[]
}

export const HomeHeroCategories = ({ categories }: Props) => {
  return (
    <div className="grid grid-cols-[540px_255px_255px] md:grid-cols-3 grid-rows-[200px_260px] gap-4">
      {categories.map((cat, key) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;

        return (
          <div
            key={key}
            className={`
              relative w-full h-full 
              ${key === 0 ? "row-span-2" : ""}
              ${key === categories.length - 1 ? "col-span-2" : ""}
            `}
          >
            <Image src={imageUrl} fill={true} alt={cat} />
            <CenteredLabel>{cat}</CenteredLabel>
          </div>
        );
      })}
    </div>
  )
}

export default HomeHeroCategories;