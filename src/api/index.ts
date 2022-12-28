import axios from 'axios'
// import { CityQuery } from './instance'

export const CityAPI = {
  fetchCityData: async (city: string) => {
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: city,
            appid: '665b5a3342ce18418ac2dc565903a417'
          }
        }
      )
      return response.data
    } catch (e) {
      throw e
    }
  },
  fetchCItyByNameAndCode: async (value: string) => {
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: value,
            appid: '665b5a3342ce18418ac2dc565903a417'
          }
        }
      )
      return response.data
    } catch (e) {
      throw e
    }
  },
  fetchCityById: async (id: any) => {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          id: id,
          appid: '665b5a3342ce18418ac2dc565903a417'
        }
      }
    )
    return response.data
  }
}
