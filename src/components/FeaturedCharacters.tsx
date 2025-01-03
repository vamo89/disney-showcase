'use client';

import CharacterList from './CharacterList';
import { useCharacters } from '@/context/CharacterContext';
import { FEATURED_CHARACTERS } from '@/constants';

const FeaturedCharacters = () => {
  const { characters, isLoading, error } = useCharacters();

  // Take first 4 characters
  const featuredCharacters = characters.slice(0, 4);

  if (!isLoading && !error && featuredCharacters.length === 0) {
    return (
      <div className="text-center py-8 bg-primary text-white w-full max-w-full">
        {FEATURED_CHARACTERS.NO_RESULTS}
      </div>
    );
  }

  return (
    <div className="container mx-0 py-8 bg-primary w-full max-w-full">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">
        {FEATURED_CHARACTERS.TITLE}
      </h2>
      <CharacterList />
    </div>
  );
};

export default FeaturedCharacters;
