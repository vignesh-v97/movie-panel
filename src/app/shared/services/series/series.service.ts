import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISeries } from '../../interfaces/Series';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {}
  public getSeriesDetails(id:string): Observable<ISeries> {
    return this.http.get<ISeries>(`${environment.tmdbBaseUrl}/tv/${id}?api_key=${environment.tmdbApiKey}`)
  }
}
