import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Project/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type StoryButton = StoryObj<typeof meta>;

// --------------------------
export const Default: StoryButton = {
  args: {
    title: 'Button',
    state: 'BUTTON_DEFAULT',
    type: 'button',
  },
};

export const Add: StoryButton = {
  args: {
    ...Default.args,
    title: 'Add note',
    state: 'BUTTON_ADD',
  },
};

export const Save: StoryButton = {
  args: {
    ...Default.args,
    title: 'Save',
    state: 'BUTTON_SAVE',
    type: 'submit',
  },
};

export const Cancel: StoryButton = {
  args: {
    ...Default.args,
    title: 'Cancel',
    state: 'BUTTON_CANCEL',
  },
};