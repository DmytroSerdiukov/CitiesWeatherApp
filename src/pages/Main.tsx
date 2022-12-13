import React, { FC, useEffect, useRef } from 'react'
import { Container } from '@mui/system'
import { TextField, Button } from '@mui/material'
import CityCard from '../components/CityCard/container'
import { fetchCityByName, getCities, saveCityToStorage } from '../store/reducers/CityReducer'
import { useAppDispatch, useAppSelector } from '../store/hooks'

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

  useEffect(() => {
    getCitiesFromStorage()
  }, [])

  return (
    <Container maxWidth='lg' style={styles.wrapper}>
      <Container sx={styles.inputContainer}>
        <TextField inputRef={inputRef} type={'input'} label={'City name'} data-testid={'input'} />
        <Button sx={styles.button} variant='outlined' onClick={fetchCity} data-testid={'btn'}>
          Submit
        </Button>
      </Container>

      <Container style={styles.cities} data-testid='cities'>
        {cities != null && cities.length > 0
          ? cities.map((city: any, index: any) => <CityCard key={index} city={city} />)
          : null}
      </Container>
    </Container>
  )
}

export default MainPage

const styles: any = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    width: 135,
    height: 55
  },
  cities: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 50
  }
}
