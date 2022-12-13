import cityReducer, {
  getCities,
  saveCityToStorage,
  removeCityFromStorage
} from '../store/reducers/CityReducer'

describe('City reducer', () => {
  it('get cities', () => {
    const res = cityReducer({ cities: [] }, getCities())
    expect(res).toEqual({ cities: [] })
  })
  it('add city to local storage', () => {
    const cityToStore = 'Kyiv'
    const res = cityReducer({ cities: [] }, saveCityToStorage(cityToStore))
    expect(res).toEqual({ cities: ['Kyiv'] })
  })
  it('remove city from local storage', () => {
    const cityToStore = 'Kyiv'
    const res = cityReducer({ cities: [] }, removeCityFromStorage(cityToStore))
    expect(res).toEqual({ cities: [] })
  })
})
