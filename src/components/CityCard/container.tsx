import React, { FC, useEffect, useState } from 'react'
import { CityAPI } from '../../api'
import { useAppDispatch } from '../../store/hooks'
import { removeCityFromStorage } from '../../store/reducers/CityReducer'
import { CityContainerProps } from '../../ts/interfaces/citycard'

import CityCardMarkup from './markup'

const CityCard: FC<CityContainerProps> = ({ city }) => {
  const [data, setData] = useState<any | null>(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    getCurrentWeather()
  }, [])

  const getCurrentWeather = async () => {
    try {
      const res: any = await CityAPI.fetchCityData(city)
      setData(res)
    } catch (e) {
      throw e
    }
  }

  const deleteCityFromStorage = (city: any) => {
    dispatch(removeCityFromStorage(city))
  }

  return (
    <CityCardMarkup
      getCurrentWeather={getCurrentWeather}
      deleteCityFromStorage={deleteCityFromStorage}
      data={data}
      cityName={city}
    />
  )
}

export default CityCard
