import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  }
})

export default store;