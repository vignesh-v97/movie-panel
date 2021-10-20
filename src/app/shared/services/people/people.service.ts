import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPeople } from '../../interfaces/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }
  public getPeopleDetails(id: string): Observable<IPeople> {
    return this.http.get<IPeople>(`${environment.tmdbBaseUrl}/person/${id}?api_key=${environment.tmdbApiKey}`)
  }
}
