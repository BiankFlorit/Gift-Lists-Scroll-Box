import React from 'react';

import { Menu } from './Menu';

export default {
    title: 'Organisms/Menu',
    component: Menu,
  };

  const Template = (args) => <Menu {...args} />;
  
  export const CustomMenu = Template.bind({});
  CustomMenu.args = {};