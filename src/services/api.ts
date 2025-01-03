import { type Character } from '@/types';

interface ApiResponse {
  info: {
    count: number;
    totalPages: number;
    previousPage: string | null;
    nextPage: string | null;
  };
  data: Character[];
}

const BASE_URL = 'https://api.disneyapi.dev';

export const getCharacters = async (page = 1): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/character?page=${page}&pageSize=50`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const getCharactersByName = async (
  name: string,
  page = 1,
): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/character?name=${encodeURIComponent(
        name,
      )}&page=${page}&pageSize=50`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters by name:', error);
    throw error;
  }
};

// Optional: Add a function to get a single character by ID
export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};
