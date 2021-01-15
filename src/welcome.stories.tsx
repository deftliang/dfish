import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <div style={{margin:'0 auto'}}>
        <h1>欢迎来到 dfish 组件库</h1>
        <p>dfish 是deft学习react ts 所造的UI组件轮子</p>
        <h3>安装试试</h3>
        <code>npm install dfish --save</code>
        <div>or</div>
        <code>yarn add dfish</code>
      </div>
    )
  },
  { info: { disable: true } }
)

