import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../index';


const meta: Meta<typeof Typography> = {
    component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Todo add docx

export const TypographyView: Story = {
    args:{
    children:'test'
    }
};
