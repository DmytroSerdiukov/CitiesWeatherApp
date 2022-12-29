import React from 'react'
import MainPage from '../pages/Main'

import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { describe, expect } from '@jest/globals'

import { Provider } from 'react-redux'
import { store } from '../store'
import mockAxios from 'axios'
import { MemoryRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { data } from '../__mocks__/data'

jest.mock('axios')

beforeEach(() => {
  mockAxios.get.mockResolvedValueOnce(data)
  const cities = ['Kyiv, UA']
  const key = JSON.stringify(cities)
  localStorage.setItem('cities', key)
})

afterEach(cleanup)

describe('Test Main Page', () => {
  const setup = () => {
    return render(
      <Router>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </Router>
    )
  }

  test('before card appears there is loader', async () => {
    setup()
    const citiesDiv = screen.getByRole('status')
    expect(citiesDiv).toBeInTheDocument()
  })

  test('card shows fetched data', async () => {
    await act(async () => setup())
    const card = await screen.findByText(/kyiv/i)
    expect(card).toBeInTheDocument()
  })

  test('city card removed when remove button hitted', async () => {
    await act(async () => setup())
    const card = await screen.findByText(/kyiv/i)
    expect(card).toBeInTheDocument()
    const button = screen.getByTestId('remove')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(card).not.toBeInTheDocument()
  })
})
