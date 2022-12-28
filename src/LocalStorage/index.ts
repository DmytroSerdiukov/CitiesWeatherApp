const CitiesStorage = {
  getCities: () => {
    if (!localStorage.getItem('cities')) localStorage.setItem(`cities`, JSON.stringify([]))
    const citiesStore: string | null = localStorage.getItem('cities')
    const cities: any = JSON.parse(citiesStore)
    return cities
  },
  addCity: (city: string) => {
    if (!localStorage.getItem('cities')) localStorage.setItem(`cities`, JSON.stringify([]))
    let cities: string = localStorage.getItem('cities')
    cities = JSON.parse(cities)
    cities = [...cities, city]
    localStorage.setItem('cities', JSON.stringify(cities))
  },
  removeCity: (city: string) => {
    const citiesStore: any = localStorage.getItem('cities')
    const newStore = JSON.parse(citiesStore).filter((el: any) => el != city)
    localStorage.setItem(`cities`, JSON.stringify(newStore))
  }
}

export default CitiesStorage
