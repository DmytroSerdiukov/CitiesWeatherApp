export type ICityProps = {
  cityName: any
  data: ApiResponse
  deleteCityFromStorage: (id: any) => void
  getCurrentWeather: () => void
}

type ApiData = {
  id: number
  name: string
  main: Main
  weather: Weather[]
}

type Main = {
  temp: number
}

type Weather = {
  main: string
}

export type ApiResponse = ApiData | null
