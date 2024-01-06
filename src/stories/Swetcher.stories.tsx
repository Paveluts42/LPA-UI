import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../index';

const meta: Meta<typeof Switch> = {
    component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;
// Todo add docx and handlers add more setings

export const SwitchView: Story = {
args:{
    type:"main"
}
};


