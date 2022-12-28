import axios from 'axios'

// import axios from 'axios'
export default {}
// const CityQuery = axios.create({
//   baseURL: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather',
//   headers: {
//     'Content-Type': 'aplication/json',
//     'Access-Allow-Control-Origin': '*'
//   },
//   params: {
//     appid: '665b5a3342ce18418ac2dc565903a417'
//   }
// })

const GeoQuery = axios.create({
  baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
  headers: {
    'X-RapidAPI-Key': 'a5a34a2d6cmsh6e4605f1ea57743p12d4c5jsnd4802612a15a',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
})

export { GeoQuery }
