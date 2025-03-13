import Image from "next/image";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="#">Telefono</Link>
        </li>
        <li>
          <Link href="#">Ubicacion</Link>
        </li>
        <li>
          <Link href="#">Soporte</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="#"><Image src="/ico-small-fb.svg" width={24} height={24} alt="" /></Link>
        </li>
        <li>
          <Link href="#"><Image src="/ico-small-ig.svg" width={24} height={24} alt="" /></Link>
        </li>
        <li>
          <Link href="#"><Image src="/ico-small-location.svg" width={24} height={24} alt="" /></Link>
        </li>
        <li>
          <Link href="#"><Image src="/ico-small-clock.svg" width={24} height={24} alt="" /></Link>
        </li>
      </ul>
    </div>
  )
}

export default TopBar;