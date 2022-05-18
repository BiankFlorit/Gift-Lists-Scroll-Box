import React from 'react';

import { Badge } from './Badge';

export default {
    title: 'Atoms/Badge',
    component: Badge,
  };

  const Template = (args) => <Badge {...args} />;

  export const Red = Template.bind({});
  Red.args = {
      color: "red",
      groupTag: "Red Tag",
  };

  export const Orange = Template.bind({});
  Orange.args = {
    color: "orange",
    groupTag: "Orange Tag",
  };

  export const Yellow = Template.bind({});
  Yellow.args = {
    color: "yellow",
    groupTag: "Yellow Tag",
  };

  export const Green = Template.bind({});
  Green.args = {
    color: "green",
    groupTag: "Green Tag",
  };

  export const Blue = Template.bind({});
  Blue.args = {
    color: "blue",
    groupTag: "Blue Tag",
  };

  export const Burgundy = Template.bind({});
  Burgundy.args = {
    color: "burgundy",
    groupTag: "Burgundy Tag",
  };