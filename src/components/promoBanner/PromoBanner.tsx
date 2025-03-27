//images
import Image, { StaticImageData } from "next/image";

//components
import CenteredLabel from "../centeredLabel/CenteredLabel";

type Props = {
  image: StaticImageData;
  children: React.ReactNode;
}

export const PromoBanner = ({ image, children }: Props) => {
  return (
    <div className="relative">
      <Image src={image} alt="" />
      <div className="absolute inset-0 flex items-center justify-center">
        <CenteredLabel>{children}</CenteredLabel>
      </div>
    </div>
  )
}

export default PromoBanner;
