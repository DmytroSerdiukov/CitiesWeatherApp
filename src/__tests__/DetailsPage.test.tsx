import React from 'react'
import DetailsPage from '../pages/Details'
import { screen, render, getByTestId, waitFor, cleanup, findByText } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Route, Router, Routes } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import mockAxios from 'axios'
import { data } from '../__mocks__/data'

jest.mock('axios')
beforeEach(() => {
  mockAxios.get.mockResolvedValueOnce(data)
})
afterEach(cleanup)

describe('test Details page', () => {
  const setup = () => {
    return render(
      <MemoryRouter initialEntries={['/cities/703448']}>
        <Routes>
          <Route path='cities'>
            <Route path=':id' element={<DetailsPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
  }

  test('shows loader before data fetched', async () => {
    setup()
    const loader = screen.getByRole('status')
    expect(loader).toBeInTheDocument()
  })

  test('details data is fetched', async () => {
    await act(async () => setup())

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
