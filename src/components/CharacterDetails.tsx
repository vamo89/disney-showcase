import Image from 'next/image';
import { type Character } from '@/types';
import Button from './Button';

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  return (
    <div className="flex gap-8 p-6 mx-auto">
      {character.imageUrl && (
        <div className="relative w-full md:w-[400px] h-[500px] shrink-0">
          <Image
            src={character.imageUrl}
            alt={`Photo of ${character.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <div className="flex flex-col gap-6 flex-1">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated:{' '}
            {new Date(character.updatedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {character.films?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Featured Films</h2>
            <ul className="list-disc list-inside space-y-1">
              {character.films.map((film, index) => (
                <li key={index} className="text-gray-700">
                  {film}
                </li>
              ))}
            </ul>
          </div>
        )}

        {character.shortFilms?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Short Films</h2>
            <ul className="list-disc list-inside space-y-1">
              {character.shortFilms.map((film, index) => (
                <li key={index} className="text-gray-700">
                  {film}
                </li>
              ))}
            </ul>
          </div>
        )}

        {character.tvShows?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">TV Shows</h2>
            <ul className="list-disc list-inside space-y-1">
              {character.tvShows.map((show, index) => (
                <li key={index} className="text-gray-700">
                  {show}
                </li>
              ))}
            </ul>
          </div>
        )}

        {character.sourceUrl && (
          <Button
            aria-label={`Explore more details about ${character.name}`}
            className="mt-4 w-fit"
            variant="primary"
            onClick={() => {
              window.open(character.sourceUrl, '_blank');
            }}
          >
            Explore more character details
          </Button>
        )}
      </div>
    </div>
  );
};

export default CharacterDetails;
