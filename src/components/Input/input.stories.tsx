import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Input, { InputProps } from './input'
import { action } from '@storybook/addon-actions'
// import { action } from '@storybook/addon-actions'


export default {
  title: 'Components/Input',
  component: Input,
  onChagne: action('chagne'),
  decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
} as Meta

const Templete: Story<InputProps> = (args) => <Input {...args} />

// export const AlertWithType = () => {
//   return (
//     <>
//       <Alert alertType='default' closable />
//       <Alert alertType='success' closable />
//       <Alert alertType='danger'  closable/>
//       <Alert alertType='warning' closable/>
//     </>
//   )
// }

export const simpleInput = Templete.bind({})
simpleInput.args = {
  placeholder: 'I am Input Component',
  // onChange: (e) => {action('d')}
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
