import { configureStore } from '@reduxjs/toolkit'
import CityReducer from './reducers/CityReducer'

export const store = configureStore({
  reducer: {
    city: CityReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
