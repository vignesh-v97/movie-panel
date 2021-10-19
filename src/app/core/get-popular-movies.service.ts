import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { movieRequest } from './get-popular-movies.request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPopularMoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<movieRequest[]> {
    return this.http.get<movieRequest[]>(`${environment.tmdbBaseUrl}/movie/popular?api_key=${environment.tmdbApiKey}`)
  }
}
