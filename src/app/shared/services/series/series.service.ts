import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {}
  public getMovieDetails(id:string): Observable<IMovie> {
    return this.http.get<IMovie>(`${environment.tmdbBaseUrl}/tv/${id}?api_key=${environment.tmdbApiKey}`)
  }
}
