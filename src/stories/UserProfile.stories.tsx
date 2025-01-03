import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from '@/components/UserProfile';
import { mockProfile } from '@/mocks/profile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {
  args: {
    profile: mockProfile,
    onUpdate: (data) => console.log('Updated profile:', data),
  },
};
