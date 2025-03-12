import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between border-2 border-gray-400 p-4 bg-white">
      <div className="my-0">
        <Image src="/logo.svg" alt="Logo" width={100} height={48} />
      </div>
      <nav>
        <ul className="flex list-none gap-8">
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Woman</Link></li>
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Beauty</Link></li>
          <li><Link href="#">Accesories</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>

      <div>
        <ul className="flex gap-6 list-none ">
          <li>
            <Link href="#"><Image src="/ico-search.svg" alt="" width={24} height={24} /></Link>
          </li>
          <li>
            <Link href="#"><Image src="/ico-globe.svg" alt="" width={24} height={24} /></Link>
          </li>
          <li>
            <Link href="#"><Image src="/ico-user.svg" alt="" width={24} height={24} /></Link>
          </li>
          <li>
            <Link href="#"><Image src="/ico-bag.svg" alt="" width={24} height={24} /></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;