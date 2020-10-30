import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  // onClick: action('clicked')
  // decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const defaultButton = Template.bind({});
defaultButton.args = {
  children: ' default button ',
  btnType: 'default',
  onClick: action('clicked'),
}

export const buttonWithSize = () => (
  <>
    <Button size="lg" onClick={action('clicked')}> large button </Button>
    <Button size="sm" onClick={action('clicked')}> small button </Button>
  </>
)

export const buttonWithType = () => (
  <>
    <Button btnType="primary"  onClick={action('clicked')}> primary button </Button>
    <Button btnType="danger"  onClick={action('clicked')}> danger button </Button>
    <Button btnType="link" href="https://baidu.com"  onClick={action('clicked')}> link button </Button>
  </>
)