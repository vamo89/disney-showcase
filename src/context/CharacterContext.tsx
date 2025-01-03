'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getCharacters, getCharactersByName } from '@/services/api';
import { type Character } from '@/types';

const MAX_CHARACTERS = 8;
const MAX_FEATURED_CHARACTERS = 4;

interface CharacterContextType {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  maxCharacters: number;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined,
);

interface CharacterProviderProps {
  children: ReactNode;
  featuredCharacters?: boolean;
}

export const CharacterProvider = ({
  children,
  featuredCharacters,
}: CharacterProviderProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchCaracters, setSearchCaracters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const searchFetchCharactersWithDebounce = async () => {
      try {
        const response = await getCharactersByName(searchQuery);
        setSearchCaracters(
          Array.isArray(response.data) ? response.data : [response.data],
        );
      } catch (error) {
        setError('Failed to load characters');
        console.error('Error fetching characters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      setIsLoading(true);
      const debounceTimeout = setTimeout(
        searchFetchCharactersWithDebounce,
        500,
      );
      return () => clearTimeout(debounceTimeout);
    } else {
      setSearchCaracters([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchCharactersDefault = async () => {
      try {
        setIsLoading(true);
        const response = await getCharacters(1);
        if (featuredCharacters) {
          setCharacters(
            Array.isArray(response.data)
              ? response.data.filter((character) => character.films.length > 1)
              : [response.data],
          );
        } else {
          setCharacters(
            Array.isArray(response.data) ? response.data : [response.data],
          );
        }
      } catch (error) {
        setError('Failed to load characters');
        console.error('Error fetching characters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharactersDefault();
  }, [featuredCharacters]);

  const returnCharacters = searchQuery ? searchCaracters : characters;
  const limitedReturnCharacters = featuredCharacters
    ? returnCharacters.slice(0, MAX_FEATURED_CHARACTERS)
    : returnCharacters.slice(0, MAX_CHARACTERS);

  return (
    <CharacterContext.Provider
      value={{
        characters: limitedReturnCharacters,
        isLoading,
        error,
        searchQuery,
        setSearchQuery,
        maxCharacters: featuredCharacters
          ? MAX_FEATURED_CHARACTERS
          : MAX_CHARACTERS,
      }}
    >
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
