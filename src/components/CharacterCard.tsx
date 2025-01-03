import Image from 'next/image';
import Link from 'next/link';
import { type Character } from '@/types';
import missingImage from '@/images/missing-image.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { CHARACTER_CARD } from '@/constants';

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
    <div className="w-full min-w-[200px] max-w-[250px] h-[400px] overflow-hidden rounded-lg shadow-lg">
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
            <span className="text-sm font-medium">
              {CHARACTER_CARD.FEATURED_FILMS}
            </span>
            <div className="text-xs line-clamp-2 text-center text-gray-600">
              {character.films.join(', ')}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <span className="text-sm text-gray-600">
              {CHARACTER_CARD.NO_FILMS}
            </span>
          </div>
        )}

        <Link
          href={`/character/${character._id}`}
          className="mt-auto pb-4 block text-center text-sm font-medium text-black underline hover:text-black/80 capitalize"
          aria-label={`View ${character.name}'s profile`}
        >
          {CHARACTER_CARD.VIEW_PROFILE}
        </Link>
      </div>
    </div>
  );
};

export const CharacterCardSkeleton = () => {
  return (
    <div className="w-[250] min-w-[200px] rounded-lg bg-white shadow-md p-4 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />

      <div className="flex flex-col gap-2 items-center">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />

        {/* Description skeleton */}
        <div className="h-4 bg-gray-200 rounded w-2/6" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />

        {/* Button skeleton */}
        <div className="mt-4 h-4 w-3/6 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default CharacterCard;
