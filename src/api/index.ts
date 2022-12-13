import axios from 'axios'

export const CityAPI = {
  fetchCityData: async (city: string) => {
    const response = await axios.get<any>(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=665b5a3342ce18418ac2dc565903a417`,
      {
        headers: {
          'Content-Type': 'aplication/json',
          'Access-Allow-Control-Origin': '*'
        }
      }
    )
    return response.data
  },
  fetchCityById: async (id: any) => {
    const response = await axios.get<any>(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=665b5a3342ce18418ac2dc565903a417`,
      {
        headers: {
          'Content-Type': 'aplication/json',
          'Access-Allow-Control-Origin': '*'
        }
      }
    )
    return response.data
  },
  fetchHourlyForecastForCity: async (city: string) => {
    const response = await axios.get<any>(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly&appid=665b5a3342ce18418ac2dc565903a417`,
      {
        headers: {
          'Content-Type': 'aplication/json',
          'Access-Allow-Control-Origin': '*'
        }
      }
    )
    return response.data
  }
}
