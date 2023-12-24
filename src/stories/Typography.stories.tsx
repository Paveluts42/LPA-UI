import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '../index';

export default {
    title: 'Example/Typography',
    component: Typography,

} as ComponentMeta<typeof Typography>;


const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const TypographyCmp = Template.bind({});
TypographyCmp.args={
    children:'test'
}


