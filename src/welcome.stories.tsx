/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <div style={{margin:'0 auto'}}>
        <h1>欢迎来到 Dfish 组件库</h1>
        <p>Dfish 是 deft 学习 React / Ts 所造的UI组件轮子</p>
        <br/>
        <h3>安装试试</h3>
        <p>在项目中安装 npm 包即可使用该组件库 😁</p>
        <code>npm install dfish --save</code>
        <div>or</div>
        <code>yarn add dfish</code>
      </div>
    )
  },
  { info: { disable: true } }
)
