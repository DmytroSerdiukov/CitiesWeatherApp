import React, { FC, useState, useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { CityAPI } from '../api'
import Divider from '@mui/material/Divider'
import { Container } from '@mui/system'

type DetailsParams = {
  id: any
}

const DetailsPage: FC = () => {
  const [cityData, setData] = useState<any>(null)
  const { id } = useParams<DetailsParams>()

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
    <div data-testid='details' style={styles.wrapper}>
      {cityData != null ? (
        <Card style={styles.card}>
          <CardContent>
            <div style={styles.cardContent}>
              <Typography variant='h2' data-testid='name'>
                {cityData.name}
              </Typography>
              <div>
                <Typography variant='h6' data-testid='temp'>
                  Temperature: {temp}°
                </Typography>
                <Typography variant='h6' data-testid='feels_like'>
                  Feels like: {feels_like}°
                </Typography>
              </div>
            </div>

            <Divider />

            <Container style={styles.details}>
              <Typography data-testid='description'>{cityData.weather[0].description}</Typography>

              <Container style={styles.wind}>
                <Typography>Wind</Typography>
                <Container style={styles.windDetails}>
                  <Typography>Speed: {cityData.wind.speed}</Typography>
                  <Typography>Deg: {cityData.wind.deg}</Typography>
                  <Typography>Gust: {cityData.wind.gust}</Typography>
                </Container>
              </Container>
            </Container>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}

export default DetailsPage

const styles: any = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  },
  card: {
    width: 600,
    height: 400
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  wind: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  windDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 2
  }
}
