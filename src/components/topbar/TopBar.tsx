import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../socialIcons/SocialIcons";

export const TopBar = () => {
  const contactLinks = [
    { href: "#", icon: "/ico-small-phone.svg", text: "Teléfono" },
    { href: "#", icon: "/ico-small-location.svg", text: "Ubicación" },
    { href: "#", icon: "/ico-small-clock.svg", text: "Soporte" },
  ];

  return (
    <div className="flex bg-gray-400 w-full p-2 text-white justify-between text-xs overflow-hidden">
      <div className="flex gap-6 min-w-0">
        {contactLinks.map(({ href, icon, text }, index) => (
          <Link 
            key={text} 
            href={href} 
            className={`flex items-center gap-2 ${index === 0 ? "flex" : "hidden sm:flex"}`}>
            <Image src={icon} width={24} height={24} alt={text} />
            <span>{text}</span>
          </Link>
        ))}
      </div>
      <SocialIcons />
    </div>
  );
};

export default TopBar;