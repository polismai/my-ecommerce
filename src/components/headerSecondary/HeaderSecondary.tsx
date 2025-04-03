import { ChevronRight, Share2 } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
  href: string;
  text: string;
};

type HeaderSecondaryProps = {
  breadCrumb: BreadcrumbItem[];
};

export const HeaderSecondary = ({ breadCrumb }: HeaderSecondaryProps) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-[1110px] mx-auto">
        <div className="flex justify-between items-center">
          <ul className="flex text-sm m-0 gap-2">
            {breadCrumb.map((item, index) => (
              <li key={index} className="flex whitespace-nowrap">
                <Link href={item.href}>{item.text}</Link>
                {index < breadCrumb.length - 1 && (
                  <ChevronRight className="ml-2 w-4 h-4" />
                )}
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 border border-gray-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>
        <h1 className="text-2xl font-bold my-6 text-center">
          {breadCrumb.length > 0 ? breadCrumb[breadCrumb.length - 1].text : ""}
        </h1>
      </div>
    </div>
  );
};

export default HeaderSecondary;

