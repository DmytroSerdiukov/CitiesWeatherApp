import axios from 'axios'

export const CityAPI = {
  fetchCityData: async () => {
    const response = await axios.get<any>(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Leon&appid=665b5a3342ce18418ac2dc565903a417`,
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
