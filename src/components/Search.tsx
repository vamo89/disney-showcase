'use client';

import { useState, type ChangeEvent } from 'react';
import { searchText } from '@/constants';

interface SearchProps {
  onSearch?: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="relative flex-1 mx-4">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={searchText.placeholder}
        className="w-full rounded-full border border-gray-200 py-2 px-4 text-sm bg-gray-100
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        aria-label={searchText.ariaLabel}
        role="searchbox"
      />
    </div>
  );
};

export default Search;
