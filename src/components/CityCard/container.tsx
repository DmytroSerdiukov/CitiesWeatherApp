import React, { FC } from 'react'

import CityCardMarkup from './markup'

interface Props {
  props: any
}

const CityCard: FC = (props: any) => {
  console.log(props)
  return <CityCardMarkup {...props} />
}

export default CityCard
