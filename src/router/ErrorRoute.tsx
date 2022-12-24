import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'

const ErrorRoute = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          marginTop: 35
        }}
        variant='h3'
      >
        {' '}
        There is no such route
      </Typography>
    </Container>
  )
}
export default ErrorRoute
