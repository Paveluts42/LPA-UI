import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../index';


const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// Todo add docx

export const ButtonView: Story = {
  args:{
    children: 'fix',
  }
};

