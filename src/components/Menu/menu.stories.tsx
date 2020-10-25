import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import { action } from '@storybook/addon-actions'


export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta

const Templete: Story<MenuProps> = (args) => (
<Menu {...args}>
  <MenuItem>cool link 1</MenuItem>
  <MenuItem disabled>cool link 2</MenuItem>
  <SubMenu title="drapdown">
    <MenuItem>dropdown 1</MenuItem>
    <MenuItem>dropdown 2</MenuItem>
    <MenuItem>dropdown 3</MenuItem>
  </SubMenu>
</Menu>)

export const horizantalMenu = Templete.bind({})
horizantalMenu.args = {
  mode: 'horizantal',
  defaultIndex: '0',
  onSelect: action('select')
}


export const verticalMenu = Templete.bind({})
verticalMenu.args = {
  mode: 'vertical',
  defaultIndex: '0',
  onSelect: action('select')
}