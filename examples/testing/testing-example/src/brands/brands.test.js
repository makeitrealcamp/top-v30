const { findOneByBrand } = require('./')

// AAA

describe('findOneByBrand', () => {
  test('Should return an empty array if no brand found', () => {
    // Arrange
    const brand = 'test'
    const expected = []
    //Act
    const result = findOneByBrand(brand)
    //Assert
    expect(result).toEqual(expected)
  })

  test('Should return an object with the vehicle information', () => {
    //Arrange
    const brand = 'Mazda'
    const expected = { brand: 'Mazda', price: 5241, model: 1989 }
    //Act
    const result = findOneByBrand(brand)
    //Assert
    expect(result).toHaveProperty('price')
    expect(result).toMatchObject({ model: 1989 })
    expect(result).toEqual(expected)
  })
})

// Para cuan hay error -> ingresar una marca que no existe
// Para cuando acierto -> Ingresar una marca que existe