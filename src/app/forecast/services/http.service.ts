import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(url: string) {
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          return response || []
        })
      )
  }
}
