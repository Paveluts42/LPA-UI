import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '../index';


const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Todo add docx


export const TooltipView: Story = {
    args:{
        text:'tooltip test',
        children:<Button>test</Button>
    }
};

