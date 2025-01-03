export interface UserProfile {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  state: string;
  favoriteCharacter: string;
  favoriteRide: string;
  favoriteMovie: string;
  favoriteThemePark: string;
  updatedAt: string;
}

export type UserProfileFormData = Omit<UserProfile, 'updatedAt'>;
