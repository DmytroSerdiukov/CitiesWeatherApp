import React from 'react'
import MainPage from '../pages/Main'

import { screen, render, fireEvent, getByTestId, findByText, waitFor } from '@testing-library/react'
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
    const input = screen.getByTestId('input')
    const inp = screen.getByTestId('inp')
    const btn = screen.getByTestId('btn')
    userEvent.tab()
    userEvent.type(input, 'Kyiv')
    userEvent.click(btn)
    // console.log(inp)
    // expect(inp.va).toBe('')
    const city = await waitFor(() => screen.findByText('Kyiv'), { timeout: 3000 })
    expect(city).toBeInTheDocument()
  })
})
