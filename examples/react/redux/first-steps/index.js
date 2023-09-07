const { createStore } = require('redux')

// Store
const initialState = { 
  count: 0,
  name: 'jhon'
}

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload.number 
      }
      break
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload.number
      }
      break
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name
      }
      break
    default:
      return state
  }
}

const store = createStore(reducer)
// end store

//// components
//import { useSelector, useDispatch } from 'react-redux'
// Subscribe
store.subscribe(() => {
  const { name, count } = store.getState()
  console.log(name, count)
}) // count

// Publish
store.dispatch({ type: 'INCREMENT', payload: { number: 5 } }) // button
store.dispatch({ type: 'INCREMENT', payload: { number: 2 } }) // button
store.dispatch({ type: 'DECREMENT', payload: { number: 5 } }) // button
store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Rodri' } }) // button


// Context
//// user/auth
//// theme -> dark/light
//// language -> es/en

// Redux
//// arreglos nfc
//// arreglos restaurantes
//// arreglos de usuarios