"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "About Us", href: "#" },
  { name: "Woman", href: "#" },
  { name: "Men", href: "#" },
  { name: "Beauty", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const icons = [
  { src: "/ico-search.svg", alt: "Search" },
  { src: "/ico-globe.svg", alt: "Language" },
  { src: "/ico-user.svg", alt: "User Profile" },
  { src: "/ico-bag.svg", alt: "Shopping Bag" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full border-b-2 border-gray-400 bg-red-300 relative overflow-hidden">
      <div className="flex items-center justify-between max-w-[1110px] w-full mx-auto p-4 overflow-hidden">
        <div className="gap-2 mx-4 flex">
          {/* Botón de menú para móviles y tablets */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <Image src="/ico-menu.svg" alt="Menu" width={32} height={32} />
          </button>

          {/* Menú móvil + iPad */}
          {menuOpen && (
            <nav
              className="absolute top-full left-0 right-0 bg-white p-4 shadow-lg flex flex-col items-center gap-4 mt-2 z-50 w-full"
              role="menu"
            >
              <ul className="flex flex-col items-center gap-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-gray-600 transition-colors"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.svg" alt="Logo" width={100} height={48} />
          </Link>
        </div>

        {/* Menú de escritorio (solo en pantallas grandes) */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 list-none">
            {menuItems.map((item, index) => (
              <li key={index} role="menuitem">
                <Link href={item.href} className="hover:text-gray-600 transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ul className="flex gap-4 lg:gap-6 list-none">
            {icons.map((icon, index) => (
              <li key={index}>
                <Link href="#">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;



