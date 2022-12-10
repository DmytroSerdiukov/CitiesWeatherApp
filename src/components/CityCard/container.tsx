import React, { FC } from 'react'
import { useAppDispatch } from '../../store/hooks'
import {
  removeCityFromStorage,
  saveCityToStorage,
  updateCardForecast
} from '../../store/reducers/CityReducer'

import CityCardMarkup from './markup'

interface Props {
  city: any
}

const CityCard: FC<Props> = ({ city }) => {
  const dispatch = useAppDispatch()

  const addToStorage = (city: any) => {
    dispatch(saveCityToStorage(city))
  }

  const deleteCityFromStorage = (city: any) => {
    dispatch(removeCityFromStorage(city))
  }

  const updateCityForecast = (city: any) => {
    dispatch(updateCardForecast(city))
  }

  return (
    <CityCardMarkup
      addToStorage={addToStorage}
      deleteCityFromStorage={deleteCityFromStorage}
      updateCityForecast={updateCityForecast}
      city={city}
    />
  )
}

export default CityCard
