import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { CityAPI } from './api'
import CityCard from './components/CityCard/container'

const App: FC = () => {
  // const apiKey = '665b5a3342ce18418ac2dc565903a417'`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=665b5a3342ce18418ac2dc565903a417`

  const getData = async (): Promise<any> => {
    // const response: any = await CityAPI.fetchCityData()
    // console.log(response)
  }

  return <div>{/* <CityCard /> */}</div>
}

export default App
