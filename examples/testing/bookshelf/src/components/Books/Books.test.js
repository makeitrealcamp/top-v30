import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import { Books } from './'

const mosckBooks = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
    votes: 10,
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
    votes: 20,
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
    votes: 30,
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description 4',
    votes: 40,
  },
];

describe('Books', () => {
  
  afterEach(() => {
    cleanup()
  })
  
  
  test('Should render message if there ara no books', () => {
    render(<Books books={[]}/>)

    const messageElement = screen.getByText('No books created!')

    expect(messageElement).toBeInTheDocument()
  })

  test('Should render a list of books', () => {
    render(<Books books={mosckBooks}/>)

    const bookElement = screen.getAllByTestId('book')

    expect(bookElement).toHaveLength(4)
  })
})