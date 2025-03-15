import AdvantageItem from "../advantageItem/AdvantageItem";

export const AdvantageSection = () => {
  return (
    <>
      <AdvantageItem title="Free Shipping" content="On all UA order or order above $100" icon="/icon-truck.svg" />
      <AdvantageItem title="30 days return" content="Simply return it within 30 days for an exchange" icon="/icon-return.svg" />
      <AdvantageItem title="Support 24/7" content="Contact us 24 hours a day, 7 days a week" icon="/icon-support.svg" />
    </>
  )
}

export default AdvantageSection;