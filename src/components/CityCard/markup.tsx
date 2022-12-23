import { Card, CardContent, Typography } from '@mui/material'
import { Container } from '@mui/system'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import UpdateIcon from '@mui/icons-material/Update'
import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CityAPI } from '../../api'
import { TailSpin } from 'react-loader-spinner'
import { styles } from './styles'

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
    <>
      {data === null ? (
        <Container sx={styles.loader__container}>
          <TailSpin />
        </Container>
      ) : (
        <Card sx={styles.card}>
          <CardContent>
            <Link style={styles.link} to={`/cities/${data.id}`}>
              <Typography variant='h5'>{city}</Typography>
              <div
                style={{
                  marginTop: 60
                }}
              >
                <Typography style={{ fontSize: 48, fontWeight: 600 }}>{temperature}°C</Typography>
                <Typography>{data.weather[0].main}</Typography>
              </div>
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
      )}
    </>
  )
}

export default CityCardMarkup
