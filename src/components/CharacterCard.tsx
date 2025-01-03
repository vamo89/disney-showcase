import Image from 'next/image';
import Link from 'next/link';
import { type Character } from '@/types';
import missingImage from '@/images/missing-image.png';
import { useState } from 'react';
import { useEffect } from 'react';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [error, setError] = useState(false);
  const imageSrc = character.imageUrl || missingImage;

  useEffect(() => {
    setError(false);
  }, [imageSrc]);

  return (
    <div className="w-full max-w-[250px] h-[400px] overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-[250px] w-[250px]">
        <Image
          src={error ? missingImage : imageSrc}
          alt={`Photo of ${character.name}`}
          fill
          sizes="250px"
          className="object-cover object-top"
          priority
          onError={() => setError(true)}
        />
      </div>

      <div className="flex flex-col gap-2 items-center bg-white p-4 h-[165px]">
        <h3 className="text-base font-bold text-gray-900 line-clamp-1 text-center">
          {character.name}
        </h3>

        {character.films.length > 0 ? (
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Featured Films</span>
            <div className="text-xs line-clamp-2 text-center text-gray-600">
              {character.films.join(', ')}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <span className="text-sm text-gray-600">
              No Films, but check they profile page for more information
            </span>
          </div>
        )}

        <Link
          href={`/characters/${character._id}`}
          className="mt-auto pb-4 block text-center text-sm font-medium text-black underline hover:text-black/80 capitalize"
          aria-label={`View ${character.name}'s profile`}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
