import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import Upload from './upload'

// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024) > 50) {
//     alert('file too big')
//     return false
//   }
//   return true
// }
const filePromise = (file: File) => {
  const newFile = new File([file], 'new_Name.docx', {
    type: file.type
  })
  return Promise.resolve(newFile)
}
export default {
  title: 'Components/Upload'
} as Meta

export const simpleUpload = () => {
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      onChange={action('change')}
      beforeUpload={filePromise}
      // onSuccess={action('onSuccess')}
      // onError={action('onError')}
      // onProgress={action('onProgress')}
    />
  )
}
