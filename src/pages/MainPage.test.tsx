import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { describe, expect } from '@jest/globals'

import React from 'react'
import MainPage from './Main'

import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../store'

describe('Test Main Page', () => {
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    const input = utils.getByLabelText('City name') as HTMLInputElement
    const button = utils.getByText(/Submit/) as HTMLElement
    return { input, utils, button }
  }

  it('input and button are available', () => {
    const { utils, input, button } = setup()
    expect(input)
    expect(button)
  })

  it('test input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'Kyiv' } })
    expect(input.value).toBe('Kyiv')
  })
})
