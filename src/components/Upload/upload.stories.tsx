import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import Upload from './upload'
import Icon from '../Icon/icon'

// const defaultFileList: UploadFile[] = [
//   {
//     uid: '123',
//     size: 1234,
//     name: 'hello.md',
//     status: 'uploading',
//     percent: 30
//   },
//   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
//   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
// ]

// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024) > 50) {
//     alert('file too big')
//     return false
//   }
//   return true
// }
// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_Name.docx', {
//     type: file.type
//   })
//   return Promise.resolve(newFile)
// }
export default {
  title: 'Components/Upload'
} as Meta

export const simpleUpload = () => {
  return (
    <Upload
      action="https://my-json-server.typicode.com/typicode/demo/posts"
      onChange={action('change')}
      // beforeUpload={filePromise}
      // defaultFileList={defaultFileList}
      name="deft-name"
      headers={{ 'X-Prower-deft': 'hello' }}
      accept=".jpg"
      multiple
      drag
      // onSuccess={action('onSuccess')}
      // onError={action('onError')}
      // onProgress={action('onProgress')}
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  )
}
