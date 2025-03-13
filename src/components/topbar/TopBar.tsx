import Image from "next/image";
import Link from "next/link";

export const TopBar = () => {
  const contactLinks = [
    { href: "#", icon: "/ico-small-phone.svg", text: "Teléfono" },
    { href: "#", icon: "/ico-small-location.svg", text: "Ubicación" },
    { href: "#", icon: "/ico-small-clock.svg", text: "Soporte" },
  ];

  const socialLinks = [
    { href: "#", icon: "/ico-small-fb.svg", alt: "Facebook" },
    { href: "#", icon: "/ico-small-tw.svg", alt: "Twitter" },
    { href: "#", icon: "/ico-small-ig.svg", alt: "Instagram" },
    { href: "#", icon: "/ico-small-pin.svg", alt: "Pinterest" },
  ];

  return (
    <div className="flex bg-black w-full p-2 text-white justify-between text-xs">
      <div className="flex gap-6">
        {contactLinks.map(({ href, icon, text }) => (
          <Link key={text} href={href} className="flex items-center gap-2">
            <Image src={icon} width={24} height={24} alt={text} />
            <span>{text}</span>
          </Link>
        ))}
      </div>

      <div className="flex gap-4">
        {socialLinks.map(({ href, icon, alt }) => (
          <Link key={alt} href={href} aria-label={alt}>
            <Image src={icon} width={24} height={24} alt={alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;