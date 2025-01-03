'use client';

import Image from 'next/image';
import Link from 'next/link';
import DisneyLogo from '@/images/logo.png';
import Profile from '@/images/avatar.png';
import Search from './Search';
import { useRouter } from 'next/navigation';
import { HEADER } from '@/constants';

interface HeaderProps {
  withSearch?: boolean;
}

const Header = ({ withSearch = false }: HeaderProps) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label={HEADER.HOME_LINK_LABEL}
              tabIndex={0}
            >
              <Image src={DisneyLogo} alt="Disney Logo" height={40} priority />
            </Link>
          </div>
          {withSearch && <Search />}

          <Image
            src={Profile}
            alt="Profile"
            width={40}
            height={40}
            priority
            onClick={() => {
              router.push('/profile');
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
