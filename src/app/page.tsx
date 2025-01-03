import { CharacterProvider } from '@/context/CharacterContext';
import CharacterList from '@/components/CharacterList';
import FeaturedCharacters from '@/components/FeaturedCharacters';

export default function Home() {
  return (
    <main>
      <CharacterProvider>
        <CharacterList />
      </CharacterProvider>
      <CharacterProvider featuredCharacters>
        <FeaturedCharacters />
      </CharacterProvider>
    </main>
  );
}
