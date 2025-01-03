import { CharacterProvider } from '@/context/CharacterContext';
import CharacterList from '@/components/CharacterList';

export default function Home() {
  return (
    <main>
      <CharacterProvider>
        <CharacterList />
      </CharacterProvider>
    </main>
  );
}
