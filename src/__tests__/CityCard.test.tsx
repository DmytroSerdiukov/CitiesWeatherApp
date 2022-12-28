import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { data } from '../__mocks__/data'
import { store } from '../store'
import { Provider } from 'react-redux'
import mockAxios from 'axios'
import CityCard from '../components/CityCard/container'

jest.mock('axios')
afterEach(cleanup)

test('shows loader before card data fetched', async () => {
  mockAxios.get.mockResolvedValueOnce(data)

  const { findByRole } = render(
    <Router>
      <Provider store={store}>
        <CityCard city={'Kyiv, UA'} />
      </Provider>
    </Router>
  )
  const loader = await findByRole('status')
  expect(loader).toBeInTheDocument()
})

test('rendering card', async () => {
  mockAxios.get.mockResolvedValueOnce(data)

  const { findByText } = await act(() =>
    render(
      <Router>
        <Provider store={store}>
          <CityCard city={'Kyiv, UA'} />
        </Provider>
      </Router>
    )
  )
  const city = await findByText(/kyiv/i)
  expect(city).toBeInTheDocument()
})
