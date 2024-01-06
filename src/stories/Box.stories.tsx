import type { Meta, StoryObj } from '@storybook/react';
import {Box, Button} from '../index';

const meta: Meta<typeof Box> = {
    component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

// Todo add docx

export const BoxView: Story = {
    args:{
            width:200,
        height:200,
        backgroundColor:'#ccc',
        children:<Button>test</Button>
    }
};

