'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import CharacterDetails from '@/components/CharacterDetails';
import {
  SingleCharacterProvider,
  useSingleCharacter,
} from '@/context/SingleCharacterContext';
import Header from '@/components/Header';

const CharacterContent = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const { character, isLoading, error, fetchCharacter } = useSingleCharacter();

  useEffect(() => {
    if (id) {
      fetchCharacter(id as string);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!character) {
    return null;
  }

  return <CharacterDetails character={character} />;
};

const CharacterPage = () => (
  <>
    <Header />
    <SingleCharacterProvider>
      <CharacterContent />
    </SingleCharacterProvider>
  </>
);

export default CharacterPage;
