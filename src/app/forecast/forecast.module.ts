import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ForecastRoutingModule } from './forecast-routing.module'
import { ForecastComponent } from './forecast.component';
import { ScopePipe } from './pipes/scope.pipe';
import { HourlyPipe } from './pipes/hourly.pipe'

@NgModule({
  declarations: [
    ForecastComponent,
    ScopePipe,
    HourlyPipe
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    FormsModule
  ]
})
export class ForecastModule {
}
