import Image from 'next/image';
import Link from 'next/link';
import DisneyLogo from '@/logo.png';
import Profile from '@/avatar.png';
import Search from './Search';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Go to homepage"
              tabIndex={0}
            >
              <Image
                src={DisneyLogo}
                alt="Disney Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>
          <Search />

          <Image src={Profile} alt="Profile" width={40} height={40} priority />
        </div>
      </div>
    </header>
  );
};

export default Header;
