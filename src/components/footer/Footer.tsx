import Button from "../button/Button";
import SocialIcons from "../socialIcons/SocialIcons";
import FooterLinkList, { SectionInfo } from "../footerLinkList/FooterLinkList";

export const Footer = () => {
  const information: SectionInfo = {
    title: 'Information',
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Contact Us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'FAQs', href: '#' },
    ],
  };
  
  const usefulLinks: SectionInfo = {
    title: 'Useful Links',
    links: [
      { title: 'Terms & Conditions', href: '#' },
      { title: 'Returns & Exchanges', href: '#' },
      { title: 'Shipping & Delivery', href: '#' },
      { title: 'Privacy Policy', href: '#' },
    ],
  };

  const contactLinks: SectionInfo = {
    title: 'Contact Us',
    links: [
      { title: 'Ukrain', href: '#', icon: '/ico-small-location.svg' },
      { title: '+38 (050) 12 34 567', href: '#', icon: '/ico-small-phone.svg' },
      { title: 'All week 24/7', href: '#', icon: '/ico-small-clock.svg' },
      { title: 'mail@mail.com', href: '#', icon: '/ico-small-mail.svg' },
    ],
  };

  return (
    <footer className="w-full">
      <div className="bg-black">
        <div className="max-w-[1110px] items-center mx-auto py-4 justify-between grid grid-cols-[180px_520px_180px] bg-red-400">
          <h2 className="text-white uppercase font-semibold text-sm">Be in touch with us:</h2>
          
          <form className="flex gap-4 items-center overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border-0 w-full bg-gray-700 text-black outline-none"
            />
            <Button variant="outline" className="py-1">
              join us
            </Button>
          </form>
          <SocialIcons />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full max-w-[1110px] mx-auto">
        <div className="py-4 text-sm">
          <FooterLinkList data={information}/>
        </div>
        <div className="py-4 text-sm">
          <FooterLinkList data={usefulLinks}/>
        </div>
        <div className="py-4 text-sm">
          <FooterLinkList data={contactLinks}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;