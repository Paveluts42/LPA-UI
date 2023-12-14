import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../index';

export default {
  title: 'Example/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonSimple = Template.bind({});
ButtonSimple.args = {
  color: 'red',
  children: 'fix',

};
export const ButtonTest = Template.bind({});
ButtonTest.args = {
  title: 'test button',

};
export const ButtonSimpleSmall = Template.bind({});
ButtonSimpleSmall.args = {
  color: '#000000',
  small: true,
  children: 'medium size',
};
