import React from 'react'
import DetailsPage from '../pages/Details'
import { screen, render, fireEvent } from '@testing-library/react'

describe('Detais page testing', () => {
  const setup = () => {
    const utils = render(<DetailsPage />)
    const details = utils.getByTestId('details') as HTMLElement
    return { details }
  }

  it('check details page', () => {
    // const { details } = setup()
    // expect(details).toBeInTheDocument()
  })
})
