import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "About Us", href: "#" },
  { name: "Woman", href: "#" },
  { name: "Men", href: "#" },
  { name: "Beauty", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" }
];

const icons = [
  { src: "/ico-search.svg", alt: "Search" },
  { src: "/ico-globe.svg", alt: "Language" },
  { src: "/ico-user.svg", alt: "User Profile" },
  { src: "/ico-bag.svg", alt: "Shopping Bag" }
];

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-400 p-4 bg-white">
      <Link href="/" className="flex-shrink-0">
        <Image src="/logo.svg" alt="Logo" width={100} height={48} />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex gap-8 list-none">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-gray-600 transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <ul className="flex gap-6 list-none">
          {icons.map((icon, index) => (
            <li key={index}>
              <Link href="#">
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
