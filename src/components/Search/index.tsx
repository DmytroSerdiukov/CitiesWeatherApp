import React, { FC, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { Container } from '@mui/system'
import { loadOptions } from './loadOptions'
import { useAppDispatch } from '../../store/hooks'
import { fetchCityByNameAndCountryCode } from '../../store/reducers/CityReducer'
import { OptionType } from '../../ts/interfaces/app-search'

const Search: FC = () => {
  const [value, setValue] = useState<OptionType | null>(null)
  const dispatch = useAppDispatch()

  const changeInputValue = async (val: any) => {
    setValue(val)
    dispatch(fetchCityByNameAndCountryCode(val.value))
    setValue(null)
  }

  return (
    <Container maxWidth={'sm'}>
      <AsyncPaginate
        placeholder='Type a city...'
        debounceTimeout={600}
        value={value}
        onChange={changeInputValue}
        loadOptions={loadOptions}
      />
    </Container>
  )
}

export default Search
