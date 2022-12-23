import axios from 'axios'
import { CityQuery } from './instance'

export const CityAPI = {
  // fetchCityData: async (city: string) => {
  //   const response = await axios.get<any>(`${BASE_URL}?q=${city}&appid=${APP_ID}`, {
  //     headers: HEADERS
  //   })
  //   console.log(response.data)
  //   return response.data
  // },
  fetchCityData: async (city: string) => {
    const response = await CityQuery.get('/', {
      params: {
        q: city
      }
    })
    return response.data
  },
  fetchCItyByNameAndCode: async (value: string) => {
    const response = await CityQuery.get('/', {
      params: {
        q: value
      }
    })
    return response.data
  },
  fetchCityByCoordinates: async (latitude: string, lontitude: string) => {
    const response = await CityQuery.get('/', {
      params: {
        lat: latitude,
        lon: lontitude
      }
    })
    console.log(response.data)
    return response.data
  },
  fetchCityById: async (id: any) => {
    const response = await CityQuery.get('/', {
      params: {
        id: id
      }
    })
    return response.data
  }
}
