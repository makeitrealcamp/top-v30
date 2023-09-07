export const COUNT_INCREMENT = 'COUNT_INCREMENT'
export const COUNT_DECREMENT = 'COUNT_DECREMENT'

const initialState = { 
  count: 0,
}

const countReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + 1 
      }
      break
    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
      break
    default:
      return state
  }
}

export default countReducer