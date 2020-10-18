import React, { useContext } from 'react'
// @ts-ignore
import { render, RenderResult, fireEvent, cleanup, wait } from '@testing-library/react'
import Tabs, { TabsProps } from './tabs'
import TabItem from './tabItem'

const testProps: TabsProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
}
const modeProps: TabsProps = {
  defaultIndex: 0,
  mode: 'extrude'
}

const generateTabs = (props: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabItem label='active'>tab A</TabItem>
      <TabItem label='disabled' disabled>tab B</TabItem>
      <TabItem label='class3'>tab C</TabItem>
      <TabItem label='class4'>tab D</TabItem>
      <TabItem label='class5'>tab E</TabItem>
    </Tabs>
  )
}

let wrapper: RenderResult, tabsElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Tabs and TabItem component', () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps))
    tabsElement = wrapper.getByTestId('test-tabs')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Tabs and TabItem based on default props', () => {
    expect(tabsElement).toBeInTheDocument
    expect(tabsElement).toHaveClass('df-tabs test')
    expect(tabsElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElement).toHaveClass('tab-item is-active')
    expect(disabledElement).toHaveClass('tab-item is-disabled')
  })
  it('click items should change active, call the right callback and display tab-content', () => {
    const thirdItem = wrapper.getByText('class3')
    expect(wrapper.getByText('tab A')).toBeInTheDocument()
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(wrapper.getByText('tab C')).toBeInTheDocument()
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })
  it('should render extrude mode when mode is set to extrude', () => {
    cleanup()
    const wrapper = render(generateTabs(modeProps))
    const tabsElement = wrapper.getByTestId('test-tabs')
    expect(tabsElement).toHaveClass('tabs-extrude')
  })
})