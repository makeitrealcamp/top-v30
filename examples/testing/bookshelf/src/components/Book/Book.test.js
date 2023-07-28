import React from 'react'
import { render, screen } from '@testing-library/react';
import { Book } from '.'


describe('Book', () => {
  test('Should render correctly', () => {
    // Arrange
    const mockData = { 
      title: 'The Lord of the Rings',
      description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      votes: 10,
    }
    render(<Book {...mockData} />)
    
    //Act
    const h2Element = screen.getByText(mockData.title)
    const paragraphElement = screen.getByText(mockData.description)
    const spanElement = screen.getByTestId('votes')

    // Assert
    expect(h2Element).toBeInTheDocument()
    expect(h2Element.tagName).toBe('H2')
    expect(paragraphElement).toBeInTheDocument()
    expect(paragraphElement.tagName).toBe('P')
    expect(spanElement).toBeInTheDocument()
  })
})