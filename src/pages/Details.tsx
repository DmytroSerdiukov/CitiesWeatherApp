import React, { FC, useState, useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import { useParams } from 'react-router-dom'
import { CityAPI } from '../api'

type DetailsParams = {
  city: any
}

const DetailsPage: FC = () => {
  const [cityData, setData] = useState<any>(null)
  const { city } = useParams<DetailsParams>()
  console.log(cityData)
  console.log(city)

  useEffect(() => {
    fetchCityDetails()
  }, [])

  const fetchCityDetails = async () => {
    const response: any = await CityAPI.fetchCityData(city)
    setData(response)
  }

  return (
    <div data-testid='details'>
      {cityData != null ? (
        <Card>
          <CardContent>
            <div>
              <Typography variant='h2'>{cityData.name}</Typography>
            </div>
            <Typography>{cityData.weather[0].description}</Typography>
            <Typography>Temperature: {Math.floor(cityData.main.temp - 273.15)}°</Typography>
            <Typography>Feels like: {Math.floor(cityData.main.feels_like - 273.15)}°</Typography>
            <Typography>
              Wind
              <div>Speed: {cityData.wind.speed}</div>
              <div>Deg: {cityData.wind.deg}</div>
              <div>Gust: {cityData.wind.gust}</div>
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}

export default DetailsPage
