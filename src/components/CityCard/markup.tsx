import { Card, CardContent, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import UpdateIcon from '@mui/icons-material/Update'
import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CityAPI } from '../../api'

interface ICityProps {
  city: any
  deleteCityFromStorage: (id: any) => void
  updateCityForecast: (id: any) => void
}

const CityCardMarkup: FC<ICityProps> = ({ city, deleteCityFromStorage }) => {
  const [data, setData] = useState<any>(null)

  const getCurrentWeather = async () => {
    const res: any = await CityAPI.fetchCityData(city)
    setData(res)
  }
  useEffect(() => {
    getCurrentWeather()
  }, [])

  const temperature = data != null ? Math.floor(data.main.temp - 273.15) : null

  const removeFromStorage = () => {
    deleteCityFromStorage(city)
  }

  const updateForecast = () => {
    getCurrentWeather()
  }

  const iconSize = 40

  return (
    <Card sx={styles.card}>
      <CardContent>
        <Link style={styles.link} to={`/cities/${data && data.id}`}>
          <Typography variant='h5'>{city}</Typography>
          {data != null ? (
            <div
              style={{
                marginTop: 60
              }}
            >
              <Typography style={{ fontSize: 48, fontWeight: 600 }}>{temperature}°C</Typography>
              <Typography>{data.weather[0].main}</Typography>
            </div>
          ) : null}
        </Link>

        <div
          style={{
            position: 'absolute',
            left: '35%',
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

const styles = {
  card: {
    position: 'relative',
    width: 275,
    height: 300,
    margin: 1,
    textAlign: 'center'
  },
  link: { textDecoration: 'none' }
}
