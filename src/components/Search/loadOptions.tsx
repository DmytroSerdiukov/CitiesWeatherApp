import type { GroupBase, OptionsOrGroups } from 'react-select'
import axios from 'axios'
import { OptionType } from '../../ts/interfaces/app-search'

const getCities = async (search: string) => {
  const cities = await axios
    .get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
      headers: {
        'X-RapidAPI-Key': 'a5a34a2d6cmsh6e4605f1ea57743p12d4c5jsnd4802612a15a',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      },
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

  return {
    options: filteredOptions,
    hasMore: false
  }
}
