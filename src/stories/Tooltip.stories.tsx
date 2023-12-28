import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '../index';


const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const TooltipView: Story = {
    args:{
        text:'tooltip test',
        children:<Button>test</Button>
    }
};

