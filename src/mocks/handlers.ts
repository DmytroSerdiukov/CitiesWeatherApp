import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather/?q=Kyiv,UA&appid665b5a3342ce18418ac2dc565903a417',
    (req: any, res: any, ctx: any) => {
      return res(
        ctx.json({
          coord: {
            lon: 30.5167,
            lat: 50.4333
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          base: 'stations',
          main: {
            temp: 275.77,
            feels_like: 275.77,
            temp_min: 275.16,
            temp_max: 275.77,
            pressure: 1010,
            humidity: 90
          },
          visibility: 10000,
          wind: {
            speed: 0.45,
            deg: 246,
            gust: 0.45
          },
          clouds: {
            all: 100
          },
          dt: 1671829488,
          sys: {
            type: 2,
            id: 2003742,
            country: 'UA',
            sunrise: 1671775007,
            sunset: 1671803814
          },
          timezone: 7200,
          id: 703448,
          name: 'Kyiv',
          cod: 200
        })
      )
    }
  )
]
