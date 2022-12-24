import React from 'react'
import MainPage from '../pages/Main'
import { getByRole, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { describe } from '@jest/globals'
import { server } from '../mocks/server'
import userEvent from '@testing-library/user-event'
import { store } from '../store'
import { Provider } from 'react-redux'

describe('testing api', () => {
  test('main page', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    userEvent.selectOptions(
      // Find the select element
      screen.getByRole('combobox'),
      // Find and select the Ireland option
      screen.getByRole('option', { name: 'MA' })
    )
    expect((screen.getByRole('option', { name: 'MA' }) as HTMLOptionElement).selected).toBe(true)
  })
})
