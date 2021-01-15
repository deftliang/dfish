import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Input, { InputProps } from './input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      description: 'placehodler'
    },
    size: {
      defaultValue: { summary: 'ls' },
      control: {
        type: 'select',
        options: ['ls', 'sm']
      }
    },
    disabled: {
      defaultValue: { summary: 'false' },
    },
    onChange: {
      description: 'bind event onchange'
    },
    icon: {
      type: null
    },
    prepend: {
      type: null
    },
    append: {
      type: null
    }
  }
} as Meta

const Templete: Story<InputProps> = (args) => <div style={{ margin: '3em' }}><Input {...args} /></div>

export const simpleInput = Templete.bind({})
simpleInput.args = {
  placeholder: 'I am Input Component',
  disabled: false
}

export const InputWithSize = () => {
  return (
    <>
    <p>Large Size</p>
    <Input size="lg" />
    <p>Small Size</p>
    <Input size="sm" />
    </>
  )
}

export const InputWithPrependAppend = () => {
  return (
    <>
    <Input prepend="https://" />
    <Input append=".com" />
    <Input prepend="https://" append=".com" />
    </>
  )
}

export const InputWithIcon = Templete.bind({})
InputWithIcon.args = {
  icon: 'search'
}

export const disableInput = Templete.bind({})
disableInput.args = {
  disabled: true
}
