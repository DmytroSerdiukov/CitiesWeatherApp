import { Card, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'

const CityCardMarkup: FC = () => {
  return (
    <Card sx={{ width: 275, textAlign: 'center' }}>
      <CardContent>
        <Typography>City name</Typography>
        <Typography>Temperature</Typography>
        <Typography>Weather Condition</Typography>
      </CardContent>
    </Card>
  )
}

export default CityCardMarkup
