'use client';

import CharacterCard from './CharacterCard';
import { useCharacters } from '@/context/CharacterContext';
import { CHARACTER_LIST } from '@/constants';

const CharacterList = () => {
  const { characters, isLoading, error, searchQuery } = useCharacters();

  if (isLoading) {
    return <div className="text-center py-8">{CHARACTER_LIST.LOADING}</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  if (characters.length === 0) {
    return <div className="text-center py-8">{CHARACTER_LIST.NO_RESULTS}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {searchQuery && (
        <h1 className="text-2xl mb-4 text-center">
          {CHARACTER_LIST.TITLE}: {searchQuery}
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
