import Image from "next/image";

type Props = {
  title: string;
  content: string;
  icon: string;
}

export const AdvantageItem = ({ title, content, icon }: Props) => {
  return (
    <div className="grid grid-cols-[40px_1fr] grid-rows-2 gap-4 items-center">    
      <Image 
        src={icon} 
        width={40} 
        height={40} 
        alt=""
        className="row-span-2 col-start-1"
      />
        <p className="row-start-1 col-start-2 uppercase text-sm font-bold">{title}</p>
        <p className="row-start-2 col-start-2 text-sm">{content}</p>
    </div>
  )
}

export default AdvantageItem;