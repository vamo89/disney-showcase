// From https://disneyapi.dev/docs/
export interface Character {
  _id: number;
  name: string;
  imageUrl?: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  sourceUrl: string;
  updatedAt: string;
}
