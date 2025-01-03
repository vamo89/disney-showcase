import { useState } from 'react';
import Button from './Button';
import { type UserProfile, type UserProfileFormData } from '@/types/user';
import { USER_PROFILE } from '@/constants';

interface UserProfileProps {
  profile: UserProfile;
  onUpdate: (data: UserProfileFormData) => void;
}

const THEME_PARKS = [
  'Walt Disney World',
  'Disneyland',
  'Tokyo Disneyland',
  'Disneyland Paris',
  'Hong Kong Disneyland',
  'Shanghai Disneyland',
] as const;

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  // ... add all states
  'Wisconsin',
  'Wyoming',
] as const;

const UserProfile = ({ profile, onUpdate }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfileFormData>({
    firstName: profile.firstName,
    lastName: profile.lastName,
    birthDate: profile.birthDate,
    city: profile.city,
    state: profile.state,
    favoriteCharacter: profile.favoriteCharacter,
    favoriteRide: profile.favoriteRide,
    favoriteMovie: profile.favoriteMovie,
    favoriteThemePark: profile.favoriteThemePark,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      firstName: profile.firstName,
      lastName: profile.lastName,
      birthDate: profile.birthDate,
      city: profile.city,
      state: profile.state,
      favoriteCharacter: profile.favoriteCharacter,
      favoriteRide: profile.favoriteRide,
      favoriteMovie: profile.favoriteMovie,
      favoriteThemePark: profile.favoriteThemePark,
    });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-sm text-gray-500">
            {USER_PROFILE.VIEW.LAST_UPDATED}{' '}
            {new Date(profile.updatedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">{USER_PROFILE.VIEW.AGE}</span>{' '}
            {new Date().getFullYear() -
              new Date(profile.birthDate).getFullYear()}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">{USER_PROFILE.VIEW.LOCATION}</span>{' '}
            {profile.city}, {profile.state}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">
              {USER_PROFILE.VIEW.FAVORITE_CHARACTER}
            </span>{' '}
            {profile.favoriteCharacter}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">
              {USER_PROFILE.VIEW.FAVORITE_RIDE}
            </span>{' '}
            {profile.favoriteRide}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">
              {USER_PROFILE.VIEW.FAVORITE_MOVIE}
            </span>{' '}
            {profile.favoriteMovie}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">
              {USER_PROFILE.VIEW.FAVORITE_THEME_PARK}
            </span>{' '}
            {profile.favoriteThemePark}
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setIsEditing(true)}
          aria-label="Edit profile"
          className="mt-6"
        >
          {USER_PROFILE.EDIT_PROFILE}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.FIRST_NAME.LABEL}{' '}
            <span className="text-red-500">{USER_PROFILE.REQUIRED}</span>
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.LAST_NAME.LABEL}{' '}
            <span className="text-red-500">{USER_PROFILE.REQUIRED}</span>
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.BIRTH_DATE.LABEL}{' '}
            <span className="text-red-500">{USER_PROFILE.REQUIRED}</span>
          </label>
          <input
            type="date"
            id="birthDate"
            required
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.birthDate}
            onChange={(e) =>
              setFormData({ ...formData, birthDate: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.CITY.LABEL}
          </label>
          <input
            type="text"
            id="city"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.STATE.LABEL}
          </label>
          <select
            id="state"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          >
            <option value="">{USER_PROFILE.FORM.STATE.PLACEHOLDER}</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="favoriteCharacter"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.FAVORITE_CHARACTER.LABEL}
          </label>
          <input
            type="text"
            id="favoriteCharacter"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.favoriteCharacter}
            onChange={(e) =>
              setFormData({ ...formData, favoriteCharacter: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="favoriteRide"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.FAVORITE_RIDE.LABEL}
          </label>
          <input
            type="text"
            id="favoriteRide"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.favoriteRide}
            onChange={(e) =>
              setFormData({ ...formData, favoriteRide: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="favoriteMovie"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.FAVORITE_MOVIE.LABEL}
          </label>
          <input
            type="text"
            id="favoriteMovie"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.favoriteMovie}
            onChange={(e) =>
              setFormData({ ...formData, favoriteMovie: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="favoriteThemePark"
            className="block text-sm font-medium text-gray-700"
          >
            {USER_PROFILE.FORM.FAVORITE_THEME_PARK.LABEL}
          </label>
          <select
            id="favoriteThemePark"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.favoriteThemePark}
            onChange={(e) =>
              setFormData({ ...formData, favoriteThemePark: e.target.value })
            }
          >
            <option value="">
              {USER_PROFILE.FORM.FAVORITE_THEME_PARK.PLACEHOLDER}
            </option>
            {THEME_PARKS.map((park) => (
              <option key={park} value={park}>
                {park}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Button type="submit" variant="primary">
          {USER_PROFILE.UPDATE_PROFILE}
        </Button>
        <Button type="button" variant="secondary" onClick={handleCancel}>
          {USER_PROFILE.CANCEL}
        </Button>
      </div>
    </form>
  );
};

export default UserProfile;
