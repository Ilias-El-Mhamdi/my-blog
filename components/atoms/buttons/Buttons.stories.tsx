import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  disabled: true,
};

export const Hidden = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hidden.args = {
  hidden: true,
  children: 'Button',
  onclick: action => action('clickedd '),
};
