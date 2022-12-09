import { Card, CardContent, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import UpdateIcon from '@mui/icons-material/Update'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import {
  removeCityFromStorage,
  saveCityToStorage,
  updateCardForecast
} from '../../store/reducers/CityReducer'
import { CityAPI } from '../../api'

interface ICityProps {
  id: number
  name: any
  temp: any
  weather: any
}

const CityCardMarkup: FC<ICityProps> = ({ id, name, temp, weather }) => {
  console.log(temp)

  const [isAdded, setStatus] = useState(false)
  const dispatch = useAppDispatch()

  const ChangeStatus = () => {
    if (!isAdded) {
      addToLocalStorage()
      setStatus(true)
      return
    }
    removeFromStorage()
    setStatus(false)
  }

  const addToLocalStorage = () => {
    const city = { id, name, temp, weather }
    dispatch(saveCityToStorage(city))
  }

  const removeFromStorage = () => {
    dispatch(removeCityFromStorage(id))
  }

  const updateForecast = () => {
    dispatch(updateCardForecast(id))
  }

  const iconSize = 30
  return (
    <Card sx={{ width: 275, margin: 1, textAlign: 'center' }}>
      <CardContent>
        <Link style={{ textDecoration: 'none' }} to={`/details/${id}`}>
          <Typography>{name}</Typography>
          <Typography>{Math.floor(temp - 273.15)}°</Typography>
          <Typography>{weather[0].main}</Typography>
        </Link>
        <div
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}
        >
          <div onClick={ChangeStatus}>
            {isAdded ? (
              <HighlightOffIcon color={'error'} sx={{ width: iconSize, height: iconSize }} />
            ) : (
              <AddCircleIcon color={'success'} sx={{ width: iconSize, height: iconSize }} />
            )}
          </div>
          <div onClick={updateForecast}>
            <UpdateIcon sx={{ width: iconSize, height: iconSize }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CityCardMarkup
