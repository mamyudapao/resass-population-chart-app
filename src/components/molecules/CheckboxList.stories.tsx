import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckboxList } from './CheckboxList';
import { prefectures } from '../../constant/constants';

export default {
  title: 'organisms/CheckBoxList',
  component: CheckboxList,
} as ComponentMeta<typeof CheckboxList>;

const Template: ComponentStory<typeof CheckboxList> = (args) => (
  <CheckboxList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rowNumber: 5,
  items: prefectures,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChecked: (value: any) => console.log(value),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUnchecked: (value: any) => console.log(value),
};
