import type { Meta, StoryObj } from '@storybook/react';
import {Flex, Button} from '../index';

const meta: Meta<typeof Flex> = {
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const SwitchView: Story = {
    args:{
        width:200,
        height:200,
        justify:'Center',
        align:'Center',
        backgroundColor:'#ccc',
        children:<Button>test</Button>
    }
};

