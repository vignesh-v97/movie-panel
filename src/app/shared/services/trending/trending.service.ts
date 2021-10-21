import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrendingResponse } from '../../interfaces/Trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) {}
  public getTrending<Type>(mediaType:string, dayOrWeek:string): Observable<TrendingResponse<Type>> {
    return this.http.get<TrendingResponse<Type>>(`${environment.tmdbBaseUrl}/trending/${mediaType}/${dayOrWeek}?api_key=${environment.tmdbApiKey}&page=2`)
  }
}
