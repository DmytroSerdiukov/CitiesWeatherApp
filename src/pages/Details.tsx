import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CityAPI } from '../api'

type DetailsParams = {
  id: string
}

const DetailsPage: FC = () => {
  const [cityData, setData] = useState<any>(null)
  const { id } = useParams<DetailsParams>()
  console.log(cityData)

  useEffect(() => {
    fetchCityDetails()
  }, [])

  const fetchCityDetails = async () => {
    const response: any = await CityAPI.fetchCityById(id)
    setData(response)
  }

  return (
    <div data-testid='details'>
      {cityData != null ? (
        <div>
          <div>
            <h1> City: {cityData.name}</h1>
          </div>
          <div>{cityData.weather[0].description}</div>
          <div>{cityData.temp}</div>
        </div>
      ) : null}
    </div>
  )
}

export default DetailsPage
