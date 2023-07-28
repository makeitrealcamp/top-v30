import React from 'react'
import { render, screen, } from '@testing-library/react';
import { Button } from './'

describe('Button', () => {
  test('Should render correctly' , () => {
    render(<Button type='button'>Create</Button>)

    const buttonElement = screen.getByText('Create')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement.type).toMatch('button')
  })

  test('Should match snapshot', () => {
    const { container } = render(<Button type='button'>Create</Button>)

    expect(container).toMatchSnapshot()
  })
})