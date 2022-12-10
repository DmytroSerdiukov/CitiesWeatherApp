import { TextField, Button } from '@mui/material'
import { Container } from '@mui/system'
import React, { FC, useEffect, useState, useRef } from 'react'
import { CityAPI } from '../api'
import CityCard from '../components/CityCard/container'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchCityByName, getCities, saveCityToStorage } from '../store/reducers/CityReducer'

const MainPage: FC = () => {
  // const [cityData, setData] = useState<any>()
  const inputRef = useRef<any>()
  const cities = useAppSelector((state) => state.city.cities)
  const dispatch = useAppDispatch()
  console.log(cities)

  const fetchCity = async (): Promise<any> => {
    const value = inputRef.current.value
    dispatch(fetchCityByName(value))
  }

  const getCitiesFromStorage = () => {
    dispatch(getCities())
  }

  useEffect(() => {
    getCitiesFromStorage()
  }, [])

  return (
    <Container
      maxWidth='lg'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2
        }}
      >
        <TextField inputRef={inputRef} label={'City name'} data-testdid={'input'} />
        <Button sx={{ width: 135, height: 55 }} variant='contained' onClick={fetchCity}>
          Submit
        </Button>
      </Container>
      <Container
        style={{
          maxWidth: '80%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {cities != null && cities.length > 0
          ? cities.map((city: any, index: any) => <CityCard key={index} city={city} />)
          : null}
      </Container>
    </Container>
  )
}

export default MainPage
