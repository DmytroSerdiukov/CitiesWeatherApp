import React from 'react'
import MainPage from '../pages/Main'

import {
  screen,
  debug,
  render,
  fireEvent,
  getByTestId,
  findByText,
  waitFor,
  within
} from '@testing-library/react'
import { describe, expect } from '@jest/globals'

import { Provider } from 'react-redux'
import { store } from '../store'
import userEvent from '@testing-library/user-event'

describe('Test Main Page', () => {
  it('check cities block', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    const block = screen.getByTestId('cities') as HTMLElement
    expect(block).toBeInTheDocument()
  })

  it('check city submit', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    const input = screen.getByRole('combobox')
    const cities = screen.getByTestId('cities')
    userEvent.tab()
    userEvent.type(input, 'Kyiv')
    const fetchedCity = within(cities).getByText('Kyiv, UA')
    userEvent.type(input, `{enter}`)
    expect(fetchedCity).toBeInTheDocument()
  })
})
