import type { Meta, StoryObj } from '@storybook/react';
import CharacterCard from '@/components/CharacterCard';
import { mockCharacter } from '../mocks/characterData';

const meta: Meta<typeof CharacterCard> = {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    character: mockCharacter,
  },
};

export const LongFilmsList: Story = {
  args: {
    character: {
      ...mockCharacter,
      films: Array.from({ length: 10 }, (_, index) => `Film number ${index}`),
    },
  },
};

export const NoFilms: Story = {
  args: {
    character: {
      ...mockCharacter,
      films: [],
    },
  },
};

export const LongName: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'A long named Disney character that breaks a line or two',
    },
  },
};
