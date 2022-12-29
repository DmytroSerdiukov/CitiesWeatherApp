import React, { FC, useState, useEffect } from 'react'
import { Container } from '@mui/system'
import { Card, CardContent, Typography } from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { styles } from './styles'
import { ICityProps } from '../../ts/types/citycard'

const CityCardMarkup: FC<ICityProps> = ({
  cityName,
  data,
  deleteCityFromStorage,
  getCurrentWeather
}) => {
  const temperature = data != null ? Math.floor(data.main.temp - 273.15) : null

  const removeFromStorage = () => {
    deleteCityFromStorage(cityName)
  }

  const updateForecast = () => {
    getCurrentWeather()
  }

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
              <Typography variant='h5'>{cityName}</Typography>
              <Container style={styles.weatherDetailsContainer}>
                <Typography style={styles.temperature}>{temperature}°C</Typography>
                <Typography>{data.weather[0].main}</Typography>
              </Container>
            </Link>

            <Container sx={styles.iconsContainer}>
              <div onClick={removeFromStorage} data-testid={'remove'}>
                <HighlightOffIcon color={'error'} sx={styles.icon} />
              </div>
              <div onClick={updateForecast} data-testid={'update'}>
                <UpdateIcon sx={styles.icon} />
              </div>
            </Container>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default CityCardMarkup
