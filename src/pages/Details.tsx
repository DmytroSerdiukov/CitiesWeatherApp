import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const DetailsPage: FC = () => {
  const { id } = useParams()
  return <div>Card {id}</div>
}

export default DetailsPage
