import axios from 'axios'

const API_KEY = '9f187d38663fe156e519d040e9268227'
const ROOT_URL = `HTTP://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},mx`
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}