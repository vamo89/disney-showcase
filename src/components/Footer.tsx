import Image from 'next/image';
import DisneyLogo from '@/images/logo.png';
import { FOOTER } from '@/constants';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-4">
        <Image src={DisneyLogo} alt="Disney Logo" width={80} height={30} />
        <p className="text-sm text-black">{FOOTER.COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default Footer;
