import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { CityAPI } from '../../api'
import CitiesStorage from '../../LocalStorage'

interface CityState {
  cities: Array<any>
  city: any
}

const initialState: CityState = {
  cities: [],
  city: null
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getCities(state) {
      const cities: any = CitiesStorage.getCities()
      state.cities = [...cities]
    },
    saveCityToStorage(state, action) {
      CitiesStorage.addCity(action.payload)
      const cities = CitiesStorage.getCities()
      state.cities = [...cities]
    },
    removeCityFromStorage(state, action) {
      CitiesStorage.removeCity(action.payload)
      const cities = CitiesStorage.getCities()
      state.cities = [...cities]
    },
    updateCardForecast(state, action) {
      const cities = CitiesStorage.getCities()
      const updated = cities.map((el: any) => {
        if (el.id === action.payload.id) {
          el = { ...action.payload }
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCityByName.fulfilled, (state, action) => {
      state.city = { ...action.payload }
    })
    builder.addCase(updateCardForecast.fulfilled, (state, action) => {
      updateCardForecast(action.payload)
    })
  }
})

export const { getCities, saveCityToStorage, removeCityFromStorage } = citySlice.actions

export const fetchCityByName = createAsyncThunk(
  'cities/fetchCityByName',
  async (name: string, thunkAPI: any) => {
    const data = await CityAPI.fetchCityData(name)
    return data
  }
)

export const updateCardForecast = createAsyncThunk(
  'cities/fetchCardForecast',
  async (id: any, thunkAPI: any) => {
    const data = await CityAPI.fetchCityById(id)
    return data
  }
)

export default citySlice.reducer
