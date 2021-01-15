import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Tabs, { TabsProps } from './tabs'
import TabItem from './tabItem'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    mode: {
      defaultValue: { summary: 'dashed' },
      description: 'change the tabs mode',
      control: {
        type: 'select',
        options: ['dashed', 'extrude']
      }
    },
    defaultIndex: {
      description: 'change the default tab',
      defaultValue: { summary: '"0"' },
    },
  }
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

