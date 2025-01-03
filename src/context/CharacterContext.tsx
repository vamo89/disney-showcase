'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getCharacters } from '@/services/api';
import { type Character } from '@/types';

interface CharacterContextType {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined,
);

export const CharacterProvider = ({
  children,
  featuredCharacters,
}: {
  children: ReactNode;
  featuredCharacters?: boolean;
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await getCharacters(1);
        if (featuredCharacters) {
          setCharacters(
            response.data
              .filter((character) => character.tvShows.length > 0)
              .slice(0, 4),
          );
        } else {
          setCharacters(response.data.slice(0, 8));
        }
      } catch (error) {
        setError('Failed to load characters');
        console.error('Error fetching characters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, isLoading, error }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacters must be used within a CharacterProvider');
  }
  return context;
};
