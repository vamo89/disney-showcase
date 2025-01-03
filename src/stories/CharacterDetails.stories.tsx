import type { Meta, StoryObj } from '@storybook/react';
import CharacterDetails from '@/components/CharacterDetails';
import { mockCharacter } from '@/mocks/characterData';

const meta: Meta<typeof CharacterDetails> = {
  title: 'Components/CharacterDetails',
  component: CharacterDetails,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-7xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CharacterDetails>;

// Default story with a complete character data
export const Default: Story = {
  args: {
    character: mockCharacter,
  },
};

// Story for a character without an image
export const WithoutImage: Story = {
  args: {
    character: {
      ...mockCharacter,
      imageUrl: '',
    },
  },
};

// Story for a character with minimal data
export const MinimalData: Story = {
  args: {
    character: {
      ...mockCharacter,
      films: [],
      shortFilms: [],
      tvShows: [],
      sourceUrl: '',
    },
  },
};

// Story for a character with only films
export const OnlyFilms: Story = {
  args: {
    character: {
      ...mockCharacter,
      shortFilms: [],
      tvShows: [],
    },
  },
};

// Story for a character with a very long name
export const LongName: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'Jafar, the Grand Vizier of Agrabah and Most Powerful Sorcerer in the World',
    },
  },
};
