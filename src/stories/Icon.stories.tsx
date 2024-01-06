import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../index';


const meta: Meta<typeof Icon> = {
    component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Todo add docx

export const IconView: Story = {
    args:{
        component: "Add",
    }
};
