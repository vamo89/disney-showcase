import type { Meta, StoryObj } from '@storybook/react';
import CharacterList from '@/components/CharacterList';
import { CharacterContext } from '@/context/CharacterContext';
import { mockCharacterList } from '@/mocks/caracterListData';

const meta = {
  title: 'Components/CharacterList',
  component: CharacterList,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterList>;

export default meta;
type Story = StoryObj<typeof CharacterList>;

// Default state with characters
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
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};

// Loading state
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
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};

// Error state
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
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};

// Empty state
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
        }}
      >
        <Story />
      </CharacterContext.Provider>
    ),
  ],
};
