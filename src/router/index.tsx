import React from 'react'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import DetailsPage from '../pages/Details'
import MainPage from '../pages/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/cities/:id',
    element: <DetailsPage />
  }
])

export default router
