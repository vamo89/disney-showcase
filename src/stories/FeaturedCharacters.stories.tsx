import type { Meta, StoryObj } from '@storybook/react';
import FeaturedCharacters from '@/components/FeaturedCharacters';
import { CharacterContext } from '@/context/CharacterContext';
import { mockCharacterList } from '@/mocks/caracterListData';

const meta = {
  title: 'Components/FeaturedCharacters',
  component: FeaturedCharacters,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="max-w-7xl">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturedCharacters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <CharacterContext.Provider
        value={{
          characters: mockCharacterList,
          isLoading: false,
          error: null,
          searchQuery: '',
          setSearchQuery: () => {},
          maxCharacters: 4,
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <CharacterContext.Provider
        value={{
          characters: [],
          isLoading: true,
          error: null,
          searchQuery: '',
          setSearchQuery: () => {},
          maxCharacters: 4,
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};

export const Error: Story = {
  decorators: [
    (Story) => (
      <CharacterContext.Provider
        value={{
          characters: [],
          isLoading: false,
          error: 'Failed to load characters',
          searchQuery: '',
          setSearchQuery: () => {},
          maxCharacters: 4,
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};

export const Empty: Story = {
  decorators: [
    (Story) => (
      <CharacterContext.Provider
        value={{
          characters: [],
          isLoading: false,
          error: null,
          searchQuery: '',
          setSearchQuery: () => {},
          maxCharacters: 4,
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};
