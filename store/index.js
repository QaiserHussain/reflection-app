import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter'
import sidebar from './slices/sidebar'
export const store = configureStore({
  reducer: {
    counter: counter,
    sidebar: sidebar
  },
})