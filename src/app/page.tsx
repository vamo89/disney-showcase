import { CharacterProvider } from '@/context/CharacterContext';
import CharacterList from '@/components/CharacterList';
import FeaturedCharacters from '@/components/FeaturedCharacters';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="max-w-7xl bg-gray-100 mx-10">
      <CharacterProvider>
        <Header withSearch />
        <CharacterList />
      </CharacterProvider>
      <CharacterProvider featuredCharacters>
        <FeaturedCharacters />
      </CharacterProvider>
    </main>
  );
}
