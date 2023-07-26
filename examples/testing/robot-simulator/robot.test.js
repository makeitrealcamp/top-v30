const createRobot = require('./robot.js');

describe('createRobot', () => {
	test('Should return error with message invalid orientation', () => {
    // Arrange
    const message = 'Invalid orientation'
    // Act
    const myRobot = createRobot([2, 1], 'Nort')
    // Assert
    expect(myRobot.message).toBe(message)
	});

  test('Should return error message with invalid coordinates', () => {
    const message = 'Invalid coordinates'
    const myRobot = createRobot([11, 1], 'West')
    expect(myRobot.message).toBe(message)
  })

  test('Should return place correctly', () => {
    const message = 'Robot created successfully'
    const myRobot = createRobot([7, 3], 'North')
    expect(myRobot.message).toBe(message)
  })
});

describe('getPosition', () => {
  test('Should return error message with out of limits', () => {
    const message = 'out of limits'
    const myRobot = createRobot([11, 1], 'South')
    const result = myRobot.getPosition()
    expect(result).toBe(message)
  })

  test('Should return place correctly', () => {
    const place = { coordinates: [5, 7], orientation: 'East' }
    const myRobot = createRobot([5, 7], 'East')
    const result = myRobot.getPosition()
    expect(result).toHaveProperty('coordinates')
    expect(result).toMatchObject(place)
  })

})


describe('advance', () => {
  test('Should advance with coordinates [3, 6] and orientation "North" and return coordinates [3, 7]', () => {
    const place = { coordinates: [3, 7], orientation: 'North' }
    const myRobot = createRobot([3, 6], 'North')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject(place)
  })

})