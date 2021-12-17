import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { HttpService } from './http.service'


export type SCOPE = 'hourly' | 'daily'

export interface Scope {
  hourly: SCOPE,
  daily: SCOPE
}

export const SCOPE: Scope = {
  hourly: 'hourly',
  daily: 'daily'
}

export interface SearchResponse {
  country: string
  lat: number
  local_names: any
  lon: number
  name: string
  state: string
}

interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

interface Temperature {
  day: number
  night: number
  eve: number
  morn: number
  max?: number
  min?: number
}

export interface HourlyCast {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pop: number
  pressure: number
  temp: number
  uvi: number
  visibility: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface DailyCast {
  clouds: number
  dew_point: number
  dt: number
  feels_like: Temperature
  humidity: number
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  snow: number
  sunrise: number
  sunset: number
  temp: Temperature
  uvi: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface Forecast {
  hourly?: HourlyCast[]
  daily?: DailyCast[]
  lat: number
  lon: number
  name?: string
  timezone: string
  timezone_offset: number
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  cachedCity: string = ''

  private API_KEY = environment.API.key
  private API_ROUTE = {
    geo: environment.API.route.geo,
    data: environment.API.route.data
  }

  constructor(private http: HttpService) {
  }

  search(city: string) {
    return this.getCity(city)
  }

  getCity(city: string) {
    const url = `${this.API_ROUTE.geo}/direct?q=${city}&limit=1&appid=${this.API_KEY}`
    return this.http.get(url)
  }

  getForecast(lat: number, lon: number) {
    const url = `${this.API_ROUTE.data}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=metric&appid=${this.API_KEY}`
    return this.http.get(url)
  }
}
