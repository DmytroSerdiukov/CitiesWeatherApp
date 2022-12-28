import React, { FC, useState, useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { CityAPI } from '../api'
import Divider from '@mui/material/Divider'
import { Container } from '@mui/system'
import WeatherCondition from '../components/WeatherCondition'
import styles from './styles/details'

type DetailsParams = {
  id: any
}

const DetailsPage: FC = () => {
  const [cityData, setData] = useState<any>(null)
  const { id } = useParams<DetailsParams>()
  console.log(cityData)
  useEffect(() => {
    fetchCityDetails()
  }, [])

  const fetchCityDetails = async () => {
    const response: any = await CityAPI.fetchCityById(id)
    setData(response)
  }

  const temp = cityData != null ? Math.floor(cityData.main.temp - 273.15) : null
  const feels_like = cityData != null ? Math.floor(cityData.main.feels_like - 273.15) : null

  return (
    <div data-testid='wrapper' style={styles.wrapper}>
      {cityData != null ? (
        <Card style={styles.card}>
          <CardContent>
            <div style={styles.cardContent} data-testid='details'>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div>
                  <Typography variant='h4' data-testid='name'>
                    {cityData.name}, {cityData.sys.country}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h4' data-testid='temp'>
                      {temp}°
                    </Typography>
                  </div>
                </div>
                <WeatherCondition
                  styles={{ width: 110, height: 110 }}
                  description={cityData.weather[0].description}
                />
              </div>
            </div>
            <Divider />
            <Container
              style={{
                marginTop: 20
              }}
              maxWidth={'xs'}
            >
              <div style={styles.detail}>
                <Typography data-testid='description'>Description: </Typography>
                <Typography data-testid='description'>{cityData.weather[0].description}</Typography>
              </div>
              <div style={styles.detail}>
                <Typography data-testid='feels_like'>Feels like:</Typography>
                <Typography>{feels_like}°</Typography>
              </div>
              <div style={styles.detail}>
                <Typography>Wind</Typography>
                <Typography>{cityData.wind.speed}m/s</Typography>
              </div>
              <div style={styles.detail}>
                <Typography>Pressure</Typography>
                <Typography>{cityData.main.pressure}</Typography>
              </div>
              <div style={styles.detail}>
                <Typography>Humidity</Typography>
                <Typography>{cityData.main.humidity}</Typography>
              </div>
            </Container>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}

export default DetailsPage
