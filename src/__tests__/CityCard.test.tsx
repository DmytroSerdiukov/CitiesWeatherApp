import React from 'react'
import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'
import { data } from '../__mocks__/data'
import { store } from '../store'
import CityCard from '../components/CityCard/container'
import CityCardMarkup from '../components/CityCard/markup'
import mockAxios from 'axios'

jest.mock('axios')
beforeEach(() => {
  mockAxios.get.mockResolvedValueOnce(data)
})
afterEach(cleanup)

describe('testing city card', () => {
  const setup = () => {
    return render(
      <Router>
        <Provider store={store}>
          <CityCard city={'Kyiv, UA'} />
        </Provider>
      </Router>
    )
  }

  test('shows loader before card data fetched', async () => {
    const { findByRole } = setup()
    const loader = await findByRole('status')
    expect(loader).toBeInTheDocument()
  })

  test('rendering card', async () => {
    const { findByText } = await act(() => setup())
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
})
