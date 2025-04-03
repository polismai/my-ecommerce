import Link from "next/link";
import Image from "next/image";

type LinkInfo = {
  title: string;
  href: string;
  icon?: string;
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
        {data.links.map((link, i) => {
          return (
            <li key={i}>
              <Link href={link.href} className="flex gap-1 items-center">
                {link.icon && <Image src={link.icon} alt={link.title} width={24} height={24}/>}
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default FooterLinkList;