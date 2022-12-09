const CitiesStorage = {
  getCities: () => {
    if (!localStorage.getItem('cities')) localStorage.setItem(`cities`, JSON.stringify([]))
    const citiesStore: any = localStorage.getItem('cities')
    const cities: any = JSON.parse(citiesStore)
    return cities
  },
  addCity: (city: any) => {
    if (!localStorage.getItem('cities')) localStorage.setItem(`cities`, JSON.stringify([]))
    let cities: any = localStorage.getItem('cities')
    cities = JSON.parse(cities)
    cities = [...cities, city]
    localStorage.setItem('cities', JSON.stringify(cities))
  },
  removeCity: (id: any) => {
    const citiesStore: any = localStorage.getItem('cities')
    const newStore = JSON.parse(citiesStore).filter((el: any) => el.id != id)
    localStorage.setItem(`cities`, JSON.stringify(newStore))
  }
}

export default CitiesStorage
