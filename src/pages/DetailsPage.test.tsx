import { screen, render, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom'
import React from 'react'
import DetailsPage from './Details'

describe('Detais page testing', () => {
  const setup = () => {
    const utils = render(<DetailsPage />)
    const div = utils.getByTestId('details') as HTMLElement
    return { div }
  }

  it('check details page', () => {
    const { div } = setup()
    expect(div).toBeInTheDocument()
  })
})
