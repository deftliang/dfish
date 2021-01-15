import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Video from './video'

export default {
  title: 'Components/Video',
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta

export const simpleVideo = () => {
  return <Video poster='http://localhost:9001/50445980-88299a80-0912-11e9-962a-6fd92fd18027%E7%9A%84%E5%89%AF%E6%9C%AC.png' width={700} src="http://localhost:9001/imooc.mp4" />
}
