import { legacy_createStore } from "redux"

const initialState = { 
  count: 0,
  email: '', // new feature
  password: '' // new feature
}

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1 
      }
      break
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
      break
    case 'CHANGE_FORM':
      const { name, value } = action.payload
      return {
        ...state,
        [name]: value
      }
      break
    default:
      return state
  }
}

export const store = legacy_createStore(reducer)

