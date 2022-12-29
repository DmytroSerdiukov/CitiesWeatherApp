const CitiesStorage = {
  getCities: () => {
    if (!localStorage.getItem('cities')) localStorage.setItem(`cities`, JSON.stringify([]))
    const cities = JSON.parse(localStorage.getItem('cities') as string) as string[]
    return cities
  },
  addCity: (city: string) => {
    if (!localStorage.getItem('cities')) localStorage.setItem(`cities`, JSON.stringify([]))
    const cities = JSON.parse(localStorage.getItem('cities') as string) as string[]
    localStorage.setItem('cities', JSON.stringify(cities))
  },
  removeCity: (city: string) => {
    const citiesStore = localStorage.getItem('cities') as string
    const newStore = JSON.parse(citiesStore).filter((el: any) => el != city) as string[]
    localStorage.setItem(`cities`, JSON.stringify(newStore))
  }
}

export default CitiesStorage
