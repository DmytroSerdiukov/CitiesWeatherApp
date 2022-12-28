import React from 'react'
import { screen, render, waitFor, getByTestId, cleanup } from '@testing-library/react'
import CityCard from '../components/CityCard/container'
import { store } from '../store'
import { Provider } from 'react-redux'
import CityCardMarkup from '../components/CityCard/markup'
import { CityAPI } from '../api/index'
import mockAxios from 'axios'
import { data } from '../__mocks__/data'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'

jest.mock('axios')
afterEach(cleanup)

test('rendering card', async () => {
  mockAxios.get.mockResolvedValueOnce(data)

  const deleteCityFromStorage = jest.fn()
  await act(() =>
    render(
      <Router>
        <Provider store={store}>
          <CityCardMarkup deleteCityFromStorage={deleteCityFromStorage} city={'Kyiv, UA'} />
        </Provider>
      </Router>
    )
  )
  const city = await screen.findByText(/kyiv/i)
  expect(city).toBeInTheDocument()
})
