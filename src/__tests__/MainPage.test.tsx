import React from 'react'
import MainPage from '../pages/Main'

import { screen, render, getByTestId, cleanup } from '@testing-library/react'
import { describe, expect } from '@jest/globals'

import { Provider } from 'react-redux'
import { store } from '../store'
import mockAxios from 'axios'
import { MemoryRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { data } from '../__mocks__/data'

jest.mock('axios')
afterEach(cleanup)

describe('Test Main Page', () => {
  test('before card appears there is loader', async () => {
    mockAxios.get.mockResolvedValueOnce(data)
    const cities = ['Kyiv, UA']
    const key = JSON.stringify(cities)
    localStorage.setItem('cities', key)
    render(
      <Router>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </Router>
    )
    const citiesDiv = screen.getByRole('status')
    expect(citiesDiv).toBeInTheDocument()
  })
  test('card shows fetched data', async () => {
    const cities = ['Kyiv, UA']
    const key = JSON.stringify(cities)
    localStorage.setItem('cities', key)
    mockAxios.get.mockResolvedValueOnce(data)

    await act(async () =>
      render(
        <Router>
          <Provider store={store}>
            <MainPage />
          </Provider>
        </Router>
      )
    )
    const card = await screen.findByText(/kyiv/i)
    expect(card).toBeInTheDocument()
  })
})
