import React from 'react'
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined'

import { WeatherProps } from '../../ts/types/weather-state'

const WeatherCondition: React.FC<WeatherProps> = ({ styles = {}, description = '' }) => {
  const state = description.split(' ')[1]
  console.log(state)
  switch (state) {
    case 'rain': {
      return <ThunderstormOutlinedIcon style={{ ...styles }} />
    }
    case 'clouds': {
      return <WbSunnyOutlinedIcon style={{ ...styles }} />
    }
    case 'clear': {
      return <CloudOffOutlinedIcon style={{ ...styles }} />
    }
    default:
      return null
  }
}
export default WeatherCondition
