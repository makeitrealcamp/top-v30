import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('App', () => {
  test('Should create a new book', () => {
    const mockBook = {
      title: 'The Lord of the Rings',
      description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
    }
    render(<App />)

    const titleInput = screen.getByLabelText('Title')
    fireEvent.change(titleInput, { target: { value: mockBook.title } })

    const descriptionInput = screen.getByLabelText('Description')
    fireEvent.change(descriptionInput, { target: { value: mockBook.description } })

    const buttonElement = screen.getByTestId('button')
    fireEvent.click(buttonElement)

    const booksElement = screen.getAllByTestId('book')
    expect(booksElement).toHaveLength(1)

  })
})