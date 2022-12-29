import React from 'react'
import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { data } from '../__mocks__/data'
import { store } from '../store'
import { Provider } from 'react-redux'
import mockAxios from 'axios'
import CityCard from '../components/CityCard/container'
import CityCardMarkup from '../components/CityCard/markup'

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
test('weather updates when update button hitted', async () => {
  const deleteCityFromStorage = jest.fn()
  const getCurrentWeather = jest.fn()

  const { findByText, getByTestId } = await act(async () =>
    render(
      <Router>
        <Provider store={store}>
          <CityCardMarkup
            getCurrentWeather={getCurrentWeather}
            deleteCityFromStorage={deleteCityFromStorage}
            data={data.data}
            cityName={'Kyiv, UA'}
          />
        </Provider>
      </Router>
    )
  )
  let city = await findByText(/kyiv/i)
  expect(city).toBeInTheDocument()
  const update = getByTestId('update')
  fireEvent.click(update)
  expect(getCurrentWeather).toHaveBeenCalled()
  city = await findByText(/kyiv/i)
  expect(city).toBeInTheDocument()
})
