function createRobot([_x, _y], direction) {
  const rightOrientation = ['North', 'East', 'South', 'West']
  let x = _x
  let y = _y
  let orientation = direction 
  let message

  (function validateParameters () {
    try {
      const isValid = rightOrientation.includes(direction)
      if(!isValid) {
        throw new Error('Invalid orientation')
      }

      if( x > 10 || y > 10 || x < 0 || y < 0 ) {
        throw new Error('Invalid coordinates')
      }

      message = 'Robot created successfully'
    } catch (error) {
      message = error.message
    }
  })()

  function getPosition() {
    try {
      if( x > 10 || y > 10 || x < 0 || y < 0 ) {
        throw new Error('out of limits')
      }

      return { coordinates: [x, y], orientation }
    } catch(error) {
      return error.message
    }
  }

  function advance(){
    const actions = {
      North: () => y += 1,
      South: () => y -= 1,
      East: () => x += 1,
      West: () => x -= 1
    }

    actions[orientation]()
  } 

  function turnRight() {
    let  position = (rightOrientation.indexOf(orientation) + 1) % 4 
    orientation = rightOrientation[position]
  }

  function turnLeft() {
    let  prev = (rightOrientation.indexOf(orientation) + 4 - 1) % 4 
    orientation = rightOrientation[prev]
  }

  //'RAALAL'
  function instructions(string) {
    const actions = {
      A: () => advance(),
      R: () => turnRight(),
      L: () => turnLeft()
    }
    for(i = 0; i <string.length; i ++) {
      actions[string[i]]()
    }
  }

  return {
    message,
    getPosition,
    advance,
    turnRight,
    turnLeft,
    instructions
  }
}

module.exports = createRobot


//console.log(createRobot([2,3], "North").getPosition());