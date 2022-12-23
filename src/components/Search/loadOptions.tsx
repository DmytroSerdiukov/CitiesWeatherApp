import type { GroupBase, OptionsOrGroups } from 'react-select'
import axios from 'axios'
import { OptionType } from '../../ts/interfaces/app-search'
import { GeoQuery } from '../../api/instance'

const getCities = async (search: string) => {
  const cities = await GeoQuery.get('/', {
    params: {
      namePrefix: search
    }
  })
    .then(function (response) {
      console.log(response.data.data)
      const data = response.data.data
      const cities = {
        options: data.map((el: any) => ({
          label: `${el.city}, ${el.countryCode}`,
          value: `${el.city}, ${el.countryCode}`
        }))
      }
      return cities.options
    })
    .catch(function (error) {
      console.error(error)
    })
  return cities
}

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, ms)
  })

export const loadOptions = async (
  search: string,
  prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>
) => {
  await sleep(1000)
  const filteredOptions: any = await getCities(search)
  console.log(filteredOptions)
  const searchLower = search.toLowerCase()
  const options = filteredOptions.filter(({ label }: any) =>
    label.toLowerCase().includes(searchLower)
  )

  return {
    options: filteredOptions,
    hasMore: false
  }
}
