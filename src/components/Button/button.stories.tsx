import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  onClick: action('clicked'),
  // decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const defaultButton = Template.bind({});
defaultButton.args = {
  children: ' default button ',
  btnType: 'default'
}

export const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

export const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://baidu.com"> link button </Button>
  </>
)