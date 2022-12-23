import React, { FC, useEffect, useRef } from 'react'
import { Container } from '@mui/system'
import { fetchCityByName, getCities } from '../store/reducers/CityReducer'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import CityCard from '../components/CityCard/container'
import Search from '../components/Search'
import styles from './styles/mainPage'

const MainPage: FC = () => {
  const inputRef = useRef<any>()
  const cities = useAppSelector((state) => state.city.cities)
  const dispatch = useAppDispatch()
  console.log(cities)

  const fetchCity = async (): Promise<any> => {
    const value = inputRef.current.value
    inputRef.current.value = ''
    dispatch(fetchCityByName(value))
  }

  const getCitiesFromStorage = () => {
    dispatch(getCities())
  }

  const onSearchChange = (data: any) => {
    console.log(data)
  }

  useEffect(() => {
    getCitiesFromStorage()
  }, [])

  return (
    <Container maxWidth='lg' style={styles.wrapper}>
      <Search />
      <Container style={styles.cities} data-testid='cities'>
        {cities != null
          ? cities.map((city: any, index: any) => <CityCard key={index} city={city} />)
          : null}
      </Container>
    </Container>
  )
}

export default MainPage
