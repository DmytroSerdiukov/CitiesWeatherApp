import React from 'react'
import DetailsPage from '../pages/Details'
import { screen, render, getByTestId, waitFor, cleanup, findByText } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Route, Router, Routes } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import mockAxios from 'axios'
import { data } from '../__mocks__/data'

jest.mock('axios')
afterEach(cleanup)

describe('Detais page testing', () => {
  test('details data is fetched', async () => {
    mockAxios.get.mockResolvedValueOnce(data)
    await act(async () =>
      render(
        <MemoryRouter initialEntries={['/cities/703448']}>
          <Routes>
            <Route path='cities'>
              <Route path=':id' element={<DetailsPage />} />
            </Route>
          </Routes>
        </MemoryRouter>
      )
    )

    const cityName = await screen.findByText(/kyiv/i)
    const descirption = await screen.findByText(/description/i)
    const feelslike = await screen.findByText(/feels like/i)
    const wind = await screen.findByText(/wind/i)
    const pressure = await screen.findByText(/pressure/i)

    expect(cityName).toBeInTheDocument()
    expect(descirption).toBeInTheDocument()
    expect(feelslike).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
    expect(pressure).toBeInTheDocument()
  })
})
