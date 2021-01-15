/* eslint-disable jsx-a11y/accessible-emoji */
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
          flexDirection: 'column'
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta

export const simpleVideo = () => {
  return (
    <>
    <Video width={700} src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" />
    <p style={{marginTop: '20px'}}>Enjoy the movie 😎</p>
    </>
  )
}
