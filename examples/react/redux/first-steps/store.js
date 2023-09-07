


// store
const store = {
  posts: [],
  loading: false,
  count: 0
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
      break;
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
      break;
  }
}

// dispatch
const dispatch = (action) => {
  store = reducer(store, action)
}

// components
const Button = () => {
  const handleClick = (action) => {
    dispatch({ type: action })
  }

  return <button onClick={() => handleClick('INCREMENT')}>Click</button>
}

const Count = () => {
  const store = store.getState()

  return <p>{store.count}</p>
}