'use client';

import { useState, useEffect } from 'react';
import UserProfile from '@/components/UserProfile';
import {
  UserProfileFormData,
  type UserProfile as UserProfileType,
} from '@/types/user';
import Header from '@/components/Header';

const initialProfile: UserProfileType = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1980-01-01',
  city: 'San Francisco',
  state: 'California',
  favoriteCharacter: 'Elsa',
  favoriteRide: 'Space Mountain',
  favoriteMovie: 'Moana',
  favoriteThemePark: 'Walt Disney World',
  updatedAt: new Date().toISOString(),
};

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfileType>();

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    const userProfileCookie = cookies['userProfile'];
    if (userProfileCookie) {
      const savedProfile = JSON.parse(decodeURIComponent(userProfileCookie));
      setProfile(savedProfile);
    } else {
      setProfile(initialProfile);
    }
  }, []);

  const handleUpdateProfile = (data: UserProfileFormData) => {
    const updatedProfile = {
      ...data,
      updatedAt: new Date().toISOString(),
    };

    // Save to cookie with 30 day expiration
    document.cookie = `userProfile=${encodeURIComponent(
      JSON.stringify(updatedProfile),
    )}; path=/; max-age=2592000`;
    setProfile(updatedProfile);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 mt-12">
        <UserProfile profile={profile} onUpdate={handleUpdateProfile} />
      </div>
    </main>
  );
};

export default ProfilePage;
