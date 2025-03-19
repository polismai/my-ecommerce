import Image from "next/image";

type Props = {
  title: string;
  content: string;
  icon: string;
}

export const AdvantageItem = ({ title, content, icon }: Props) => {
  return (
    <div 
      className="
        grid grid-cols-1 md:grid-cols-[40px_1fr] gap-4 
        grid-rows-[auto_auto] md:grid-rows-2 items-center text-center md:text-left
      "
    >    
      <Image 
        src={icon} 
        width={40} 
        height={40} 
        alt=""
        className="mx-auto md:mx-0 row-start-1 md:row-span-2"
      />
      <p className="row-start-2 md:row-start-1 md:col-start-2 uppercase text-sm font-bold">{title}</p>
      <p className="hidden md:block row-start-3 md:row-start-2 md:col-start-2 text-sm">{content}</p>
    </div>
  )
}

export default AdvantageItem;