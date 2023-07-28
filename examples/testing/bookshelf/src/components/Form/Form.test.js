import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '.';

describe('Form', () => {
  test('Should change form fields and submit to create a new book', () => {
    const mockBook = {
      title: 'The Lord of the Rings',
      description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
    }

    const mockCreateBook = jest.fn()
    render(<Form createBook={mockCreateBook}/>)

    const titleInput = screen.getByLabelText('Title')
    fireEvent.change(titleInput, { target: { value: mockBook.title } })
    expect(titleInput.value).toBe(mockBook.title)


    const descriptionInput = screen.getByLabelText('Description')
    fireEvent.change(descriptionInput, { target: { value: mockBook.description } })
    expect(descriptionInput.value).toBe(mockBook.description)

    const formElement = screen.getByTestId('form')
    fireEvent.submit(formElement)

    expect(mockCreateBook).toHaveBeenCalled()
    expect(mockCreateBook).toHaveBeenCalledTimes(1)
    expect(mockCreateBook).toHaveBeenCalledWith(mockBook.title, mockBook.description)
    expect(titleInput.value).toBe('')
    expect(descriptionInput.value).toBe('')
  })

})