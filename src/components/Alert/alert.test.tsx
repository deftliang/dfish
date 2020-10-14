import React from 'react'
import { render } from '@testing-library/react'
import Alert from './alert'

describe('test Alert component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(<Alert>Nice</Alert>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
  })
})