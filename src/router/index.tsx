import React from 'react'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import DetailsPage from '../pages/Details'
import MainPage from '../pages/Main'
import ErrorRoute from './ErrorRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/cities/:id',
    element: <DetailsPage />
  },
  {
    path: '*',
    element: <ErrorRoute />
  }
])

export default router
