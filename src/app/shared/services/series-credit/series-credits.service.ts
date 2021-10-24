import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISeriesCredit } from '../../interfaces/Series-credit';

@Injectable({
  providedIn: 'root'
})
export class SeriesCreditsService {

  constructor(private http: HttpClient) { }

  public getSeriesCredits(id:string):Observable<ISeriesCredit> {
    return this.http.get<ISeriesCredit>(`${environment.tmdbBaseUrl}/tv/${id}/credits?api_key=${environment.tmdbApiKey}`)
  }
}
