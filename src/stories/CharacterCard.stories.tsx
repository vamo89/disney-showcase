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

export const NoFilms: Story = {
  args: {
    character: {
      ...mockCharacter,
      films: [],
    },
  },
};

export const OneFilmList: Story = {
  args: {
    character: {
      ...mockCharacter,
      films: ['Film number 1'],
    },
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

export const LongName: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'A long named Disney character that breaks a line or two',
    },
  },
};

export const NoImage: Story = {
  args: {
    character: {
      ...mockCharacter,
      imageUrl: undefined,
    },
  },
};

export const EmptySrcImage: Story = {
  args: {
    character: {
      ...mockCharacter,
      imageUrl: '',
    },
  },
};

export const A404Image: Story = {
  args: {
    character: {
      ...mockCharacter,
      imageUrl: '/non-existent-image.jpg',
    },
  },
};
