import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { CityAPI } from '../../api'
import CitiesStorage from '../../LocalStorage'
import { ICityState, IAction } from '../../ts/interfaces/city-reducer'

const initialState: ICityState = {
  cities: []
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getCities(state: ICityState) {
      const cities: string[] = CitiesStorage.getCities()
      state.cities = [...cities]
    },
    saveCityToStorage(state: ICityState, action) {
      CitiesStorage.addCity(action.payload)
      const cities: string[] = CitiesStorage.getCities()
      state.cities = [...cities]
    },
    removeCityFromStorage(state: ICityState, action: IAction) {
      CitiesStorage.removeCity(action.payload)
      const cities: string[] = CitiesStorage.getCities()
      state.cities = [...cities]
    }
  }
})

export const { getCities, saveCityToStorage, removeCityFromStorage } = citySlice.actions

export const fetchCityByName = createAsyncThunk(
  'cities/fetchCityByName',
  async (name: string, thunkAPI: any) => {
    const data = await CityAPI.fetchCityData(name)
    thunkAPI.dispatch(saveCityToStorage(data.name))
  }
)

export const fetchCityByNameAndCountryCode = createAsyncThunk(
  'cities/fetchCityByNameAndCountryCode',
  async (value: string, thunkAPI: any) => {
    const data = await CityAPI.fetchCItyByNameAndCode(value)
    const cityData = `${data.name}, ${data.sys.country}`
    thunkAPI.dispatch(saveCityToStorage(cityData))
  }
)

export default citySlice.reducer
