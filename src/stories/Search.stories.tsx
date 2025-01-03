import type { Meta, StoryObj } from '@storybook/react';
import Search from '@/components/Search';
import { CharacterContext } from '@/context/CharacterContext';
import { useState } from 'react';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => {
      const [searchQuery, setSearchQuery] = useState('');
      return (
        <CharacterContext.Provider
          value={{
            characters: [],
            searchQuery,
            setSearchQuery,
            isLoading: false,
            error: null,
          }}
        >
          <Story />
        </CharacterContext.Provider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
};
