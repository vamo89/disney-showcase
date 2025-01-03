'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character } from '@/types';
import { getCharacterById } from '@/services/api';

interface SingleCharacterContextType {
  character: Character | null;
  isLoading: boolean;
  error: string | null;
  fetchCharacter: (id: string) => Promise<void>;
}

const SingleCharacterContext = createContext<
  SingleCharacterContextType | undefined
>(undefined);

interface SingleCharacterProviderProps {
  children: ReactNode;
}

export const SingleCharacterProvider = ({
  children,
}: SingleCharacterProviderProps) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacter = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getCharacterById(Number(id));
      if (Array.isArray(response.data)) {
        throw new Error(
          'Response data is an array. Expected single character.',
        );
      }
      setCharacter(response.data);
    } catch (err) {
      setError('Failed to load character details');
      console.error('Error fetching character:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SingleCharacterContext.Provider
      value={{
        character,
        isLoading,
        error,
        fetchCharacter,
      }}
    >
      {children}
    </SingleCharacterContext.Provider>
  );
};

export const useSingleCharacter = () => {
  const context = useContext(SingleCharacterContext);
  if (context === undefined) {
    throw new Error(
      'useSingleCharacter must be used within a SingleCharacterProvider',
    );
  }
  return context;
};
