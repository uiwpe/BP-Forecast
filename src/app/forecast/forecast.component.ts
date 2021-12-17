import { Component, OnInit } from '@angular/core'
import { Forecast, SCOPE, SearchResponse, SearchService } from './services/search.service'

@Component({
  selector: 'bp-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  searchQuery: string = 'Lviv'

  city!: SearchResponse
  selectedScope: SCOPE = SCOPE.hourly
  scopes: SCOPE[] = ['hourly', 'daily']

  forecasts: Forecast[] = []

  constructor(public service: SearchService) {
  }

  ngOnInit(): void {
  }

  onSearch(city: string) {
    if (this.service.cachedCity !== city) {
      this.service.search(city)
        .subscribe((result: SearchResponse[]) => {
          if (result.length) {
            this.city = result[0]
            this.service.cachedCity = city
            this.getForecast()
          }
        })
    }
  }

  changeScope(scope: SCOPE) {
    this.selectedScope = scope
  }

  getForecast() {
    const {lat, lon, name} = this.city

    const exists = this.forecasts.findIndex(f => f.name === name) !== -1

    if (exists) {
      return
    }

    this.service.getForecast(lat, lon)
      .subscribe((forecast) => {
        if (forecast) {
          this.forecasts = [...this.forecasts, {...forecast, name}]
        }
      })
  }
}
