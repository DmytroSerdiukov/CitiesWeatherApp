import React from 'react'
import MainPage from '../pages/Main'

import { screen, render, fireEvent, getByTestId } from '@testing-library/react'
import { describe, expect } from '@jest/globals'

import { Provider } from 'react-redux'
import { store } from '../store'

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
})
