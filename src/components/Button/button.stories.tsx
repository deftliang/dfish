import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'change the button content',
      defaultValue: { summary: 'button' },
      control: {
        type: 'text'
      }
    },
    size: {
      defaultValue: { summary: 'ls' },
      description: 'change the button size',
      control: {
        type: 'select',
        options: ['ls', 'sm']
      }
    },
    btnType: {
      defaultValue: { summary: 'default' },
      description: 'change the button button type',
      control: {
        type: 'select',
        options: ['primary', 'default', 'danger', 'link']
      }
    },
    onClick: {
      description: 'click the button to trigger event',
      action: 'clicked'
    },
    backgroundColor: {
      description: 'chagne the button backgroud color',
      control: {
        type: 'color'
      },
    },
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <div style={{ margin: '3em' }}><Button {...args} /></div>

export const defaultButton = Template.bind({});
defaultButton.args = {
  children: 'custom button ',
  btnType: 'default',
  onClick: action('clicked'),
  disabled: false
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