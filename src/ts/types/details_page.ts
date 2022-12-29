export type DetailsApiResponse = ApiResponse | null

type ApiResponse = {
  name: string
  sys: Sys
  main: Main
  weather: Weather[]
  wind: Wind
}

type Sys = {
  country: string
}

type Main = {
  temp: number
  feels_like: number
  pressure: number
  humidity: number
}

type Weather = {
  description: string
}

type Wind = {
  speed: number
}
