import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = { 
  posts: [],
  error: null,
  status: 'idle'
}

export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async ({ id }) => {
    console.log('Parametro de id:', id)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    // if(true){
    //   throw new Error('Error al traer los posts')
    // }

    const data = await response.json()
    return data
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
          state.status = 'loading'
      })
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.posts = payload
      })
      .addCase(getAllPosts.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })

  }
})

export const selectPosts = state => state.posts

export default postsSlice.reducer