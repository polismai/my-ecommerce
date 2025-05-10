import Link from "next/link";
import Image from "next/image";
import React from "react";

const socialLinks = [
  { href: "#", icon: "/ico-small-fb.svg", alt: "Facebook" },
  { href: "#", icon: "/ico-small-tw.svg", alt: "Twitter" },
  { href: "#", icon: "/ico-small-ig.svg", alt: "Instagram" },
  { href: "#", icon: "/ico-small-pin.svg", alt: "Pinterest" },
];

type Props = React.ComponentProps<"div">;

export const SocialIcons = ({ className = "", ...props }: Props) => {  
  return (
    <div className={`flex gap-4 items-center ${className}`} {...props}>
      {socialLinks.map(({ href, icon, alt }) => (
        <Link key={alt} href={href} aria-label={alt}>
          <Image src={icon} width={24} height={24} alt={alt} />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;