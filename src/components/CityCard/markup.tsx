import { Card, CardContent, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import UpdateIcon from '@mui/icons-material/Update'
import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CityAPI } from '../../api'

interface ICityProps {
  city: any
  addToStorage: (city: any) => void
  deleteCityFromStorage: (id: any) => void
  updateCityForecast: (id: any) => void
}

const CityCardMarkup: FC<ICityProps> = ({
  city,
  addToStorage,
  deleteCityFromStorage,
  updateCityForecast
}) => {
  const [data, setData] = useState<any>(null)
  console.log(data)
  const getCurrentWeather = async () => {
    const res: any = await CityAPI.fetchCityData(city)
    setData(res)
  }
  useEffect(() => {
    getCurrentWeather()
  }, [])
  // const temperature = Math.floor(temperature - 273.15)

  // const [isAdded, setStatus] = useState(false)

  // const addToLocalStorage = () => {
  //   // const city = { id, name, temp: main.temp, weather }
  //   addToStorage(city)
  // }

  const removeFromStorage = () => {
    deleteCityFromStorage(city)
  }

  const updateForecast = () => {
    getCurrentWeather()
  }

  const iconSize = 30

  return (
    <Card sx={{ position: 'relative', width: 275, height: 300, margin: 1, textAlign: 'center' }}>
      <CardContent>
        <Link style={{ textDecoration: 'none' }} to={`/details/${city}`}>
          <Typography variant='h4'>{city}</Typography>
          {data != null ? (
            <>
              <Typography>{Math.floor(data.main.temp - 273.15)}°</Typography>
              <Typography>{data.weather[0].main}</Typography>
            </>
          ) : null}
        </Link>

        <div
          style={{
            position: 'absolute',
            left: '40%',
            bottom: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <div onClick={removeFromStorage}>
            <HighlightOffIcon color={'error'} sx={{ width: iconSize, height: iconSize }} />
          </div>
          <div onClick={updateForecast}>
            <UpdateIcon sx={{ width: iconSize, height: iconSize }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CityCardMarkup
