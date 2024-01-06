import type { Meta, StoryObj } from '@storybook/react';
import {Grid,  Button} from '../index';

const meta: Meta<typeof Grid> = {
    component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

// Todo add docx

export const GridView: Story = {
    args:{
        width:"100%",
        height:"100%",
        backgroundColor:'#ccc',
        children:

                        <Button>test</Button>


    }
};

