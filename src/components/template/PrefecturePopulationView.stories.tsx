import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PrefecturePopulationView } from '../template/PrefecturePopulationView';
import { prefectures } from '../../constant/constants';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 1000),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 1000),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default {
  title: 'template/PrefecturePopulationView',
  component: PrefecturePopulationView,
} as ComponentMeta<typeof PrefecturePopulationView>;

const Template: ComponentStory<typeof PrefecturePopulationView> = (args) => (
  <PrefecturePopulationView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  prefectures: prefectures,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCheck: () => {
    return null as any;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUncheck: (value: any) => console.log(value),
  data: data,
};
