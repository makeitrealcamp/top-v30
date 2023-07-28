import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

test('Should render items', () => {
  //Arrange
  const expectedItems = [
    {
      title: 'Home',
      href: '/home'
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    }
  ]

  render(<SideBar items={expectedItems}/>)

  //Act
  const anchorElement = screen.getAllByTestId('sidebar-navigation')

  //Assert
  expect(anchorElement.length).toBe(expectedItems.length)
  expect(anchorElement[0]).toHaveAttribute('href', expectedItems[0].href)
  expect(anchorElement[2]).toHaveTextContent(expectedItems[2].title)
})