import Image from 'next/image';
import DisneyLogo from '@/logo.png';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-4">
        <Image src={DisneyLogo} alt="Disney Logo" width={80} height={30} />
        <p className="text-sm text-black">
          For educational use only. All characters and content are the property
          of Disney. This test is for private use and development testing only
          and should not be distributed for public use.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
