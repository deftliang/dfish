import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Alert, { AlertProps } from './alert'


export default {
  title: 'Components/Alert',
  component: Alert,
  decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
} as Meta

const Templete: Story<AlertProps> = (args) => <Alert {...args} />

export const defaultAlert = Templete.bind({})
defaultAlert.args = {
  alertType: 'default',
  children: '新消息',
  title: '提示',
  closable: true
}

export const dangerAlert = Templete.bind({})
dangerAlert.args = {
  alertType: 'danger',
  children: '新消息',
  title: '提示',
  closable: true
}

export const successAlert = Templete.bind({})
successAlert.args = {
  alertType: 'success',
  children: '新消息',
  title: '提示',
  closable: true
}

export const warningAlert = Templete.bind({})
warningAlert.args = {
  alertType: 'warning',
  children: '新消息',
  title: '提示',
  closable: true
}
