import { Pipe, PipeTransform } from '@angular/core'
import { Forecast, SCOPE } from '../services/search.service'

@Pipe({
  name: 'scope',
  pure: true
})
export class ScopePipe implements PipeTransform {

  transform(forecast: Forecast, scope: SCOPE): any[] {
    return forecast[scope] || []
  }

}
