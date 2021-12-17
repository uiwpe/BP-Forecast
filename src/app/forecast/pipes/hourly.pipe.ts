import { Pipe, PipeTransform } from '@angular/core';
import { SCOPE } from '../services/search.service'

@Pipe({
  name: 'hourly'
})
export class HourlyPipe implements PipeTransform {

  transform(forecast: any[], scope: SCOPE): any {
    if (scope === SCOPE.daily) {
      return forecast
    }
    return forecast.filter((_, i) => !(i % 3))
  }

}
