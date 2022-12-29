import React, { FC, useEffect } from 'react'
import { Container } from '@mui/system'
import { getCities } from '../store/reducers/CityReducer'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import CityCard from '../components/CityCard/container'
import Search from '../components/Search'
import styles from './styles/mainPage'

const MainPage: FC = () => {
  const cities = useAppSelector((state) => state.city.cities)
  const dispatch = useAppDispatch()

  const getCitiesFromStorage = () => {
    dispatch(getCities())
  }

  useEffect(() => {
    getCitiesFromStorage()
  }, [])

  return (
    <Container maxWidth='lg' style={styles.wrapper}>
      <Search />
      <Container style={styles.cities} data-testid='cities'>
        {cities != null
          ? cities.map((city: any, index: any) => (
              <CityCard data-testid={`${city}`} key={index} city={city} />
            ))
          : null}
      </Container>
    </Container>
  )
}

export default MainPage
