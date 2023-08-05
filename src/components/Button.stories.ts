import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Project/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --------------------------
export const Default: Story = {
  args: {
    title: 'Button',
    // size: "medium",
    // backgroundColor: 'white',
  },
};

export const Add: Story = {
  args: {
    title: 'Add note',
    // size: "large",
    // backgroundColor: 'bg-gradient-to-r from-blue-light to-green hover:bg-green text-gray',
  },
};