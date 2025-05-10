import Link from "next/link";
import { ComponentType, SVGProps } from "react";

type LinkInfo = {
  title: string;
  href: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type SectionInfo = {
  title: string;
  links: LinkInfo[];
};

type Props = {
  data: SectionInfo;
}

export const FooterLinkList = ({ data }: Props) => {
  return (
    <>
      <p className="uppercase mb-4">{data.title}</p>
      <ul className="flex flex-col gap-4 text-gray-500">
        {data.links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="flex gap-2 items-center">
              {link.icon && <link.icon className="text-black w-6 h-6" />}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinkList;

