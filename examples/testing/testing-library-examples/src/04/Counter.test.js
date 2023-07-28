import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test('Should handle click', () => {
  //Arrange
  render(<Counter/>)

  //Act
  const buttonElement = screen.getByText('Add one')
  const paragraphElement = screen.getByTestId('paragraph-count')
  userEvent.click(buttonElement)

  //Assert
  expect(paragraphElement).toHaveTextContent(/you clicked 1 times/i)
  userEvent.click(buttonElement)
  expect(paragraphElement).toHaveTextContent(/you clicked 2 times/i)

})