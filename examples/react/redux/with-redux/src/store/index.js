import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import countReducer from "./reducers/count.reducer";
import formReducer from "./reducers/form.reducer";
import postsReducer from "./reducers/posts.reducer";

const rootReducer = combineReducers({
  countReducer,
  formReducer,
  postsReducer
})

/* function logger(store) {
  return function(next) {
    return function(action) {
      const prevState = store.getState();
      next(action);
      console.log('previous state:', prevState.countReducer.count, action, 'next state:', store.getState().countReducer.count)
    }
  }

} */

const middleware = applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer, middleware)