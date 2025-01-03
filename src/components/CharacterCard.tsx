import Image from 'next/image';
import Link from 'next/link';
import { type Character } from '@/types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="w-full max-w-[250px] overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-[250px] w-[250px]">
        <Image
          src={character.imageUrl}
          alt={`Photo of ${character.name}`}
          fill
          sizes="250px"
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="flex flex-col gap-2 items-center bg-white p-4">
        <h3 className="text-xl font-bold text-gray-900">{character.name}</h3>

        {character.films.length > 0 ? (
          <div>
            <span className="flex flex-col text-lg font-medium items-center">
              Featured Films
            </span>
            <div className="text-sm line-clamp-2 text-ellipsis text-gray-600">
              {character.films.join(', ')}
            </div>
          </div>
        ) : (
          <div>
            <span className="text-sm text-gray-600">
              No Films, but check they profile page for more information
            </span>
          </div>
        )}

        <Link
          href={`/characters/${character._id}`}
          className="mt-2 block text-center text-sm font-medium text-black underline hover:text-black/80"
          aria-label={`View ${character.name}'s profile`}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
