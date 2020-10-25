import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Tabs, { TabsProps } from './tabs'
import { action } from '@storybook/addon-actions'
import TabItem from './tabItem'
// import { action } from '@storybook/addon-actions'


export default {
  title: 'Components/Tabs',
  component: Tabs,
  onSelect: action('chagne')
} as Meta

const Templete: Story<TabsProps> = (args) => (<Tabs {...args}>
  <TabItem label="Tab 1">tabItem 1</TabItem>
  <TabItem label="Tab 2">tabItem 2</TabItem>
  <TabItem label="Tab 3">tabItem 3</TabItem>
  <TabItem label="Tab 4">tabItem 4</TabItem>
  <TabItem label="Tab 5">tabItem 5</TabItem>
</Tabs>)

export const simpleTabs = Templete.bind({})
simpleTabs.args = {
  mode: 'dashed',
  defaultIndex: 0
}


export const TabsWithMode = () => {
  return (
    <>
    <Templete mode="dashed"></Templete>
    <Templete mode="extrude"></Templete>
    </>
  )
}

