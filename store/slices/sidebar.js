import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'block',
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setWidth } = sidebarSlice.actions

export default sidebarSlice.reducer;