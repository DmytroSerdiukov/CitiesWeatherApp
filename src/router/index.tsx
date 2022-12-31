import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import DetailsPage from '../pages/Details'
import MainPage from '../pages/Main'
import ErrorRoute from './ErrorRoute'

const router = createBrowserRouter([
  {
    path: '/Codica_TestTask/',
    element: <MainPage />
  },
  {
    path: '/Codica_TestTask/cities/:id',
    element: <DetailsPage />
  },
  {
    path: '*',
    element: <ErrorRoute />
  }
])

export default router
