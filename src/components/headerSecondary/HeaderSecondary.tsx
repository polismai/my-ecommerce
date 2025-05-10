import { ChevronRight, Share2 } from "lucide-react";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  breadcrumb: {
    href: string;
    text: string;
  }[];
};

export const HeaderSecondary = ({ children, breadcrumb }: Props) => {
  const title = breadcrumb[breadcrumb.length - 1].text;

  return (
    <div className="bg-gray-100 py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <nav className="text-sm capitalize flex items-center gap-2 text-gray-600">
            <Link href="/" className="hover:underline text-gray-800">
              Home
            </Link>

            {breadcrumb.map(({ text, href }, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link href={href} className="hover:underline text-gray-800">
                  {text}
                </Link>
              </span>
            ))}
          </nav>

          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>

        <h1 className="text-center capitalize text-2xl font-semibold my-6 text-gray-900">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default HeaderSecondary;

