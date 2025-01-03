'use client';

import CharacterCard from './CharacterCard';
import { useCharacters } from '@/context/CharacterContext';

const CharacterList = () => {
  const { characters, isLoading, error } = useCharacters();

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  if (characters.length === 0) {
    return <div className="text-center py-8">No characters found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
