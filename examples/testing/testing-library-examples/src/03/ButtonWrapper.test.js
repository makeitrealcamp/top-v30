import { render, screen } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";
import userEvent from '@testing-library/user-event'

test('Should handle click and render text', () => {
  //Arrange
  const mockHandleClick = jest.fn() // function() {}
  const mockTitle = 'Click me!'
  render(<ButtonWrapper title={mockTitle} handleClick={mockHandleClick}/>)

  //Act
  const buttonElement = screen.getByTestId('button-wrapper')
  userEvent.click(buttonElement)
  userEvent.click(buttonElement)

  //Assert
  expect(mockHandleClick).toHaveBeenCalledTimes(2)
  expect(buttonElement).toHaveTextContent(mockTitle)
})