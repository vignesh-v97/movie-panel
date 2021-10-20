import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredits } from '../../interfaces/Credits';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(private http: HttpClient) { }
  public getCredits(id: string):Observable<ICredits> {
    return  this.http.get<ICredits>(`${environment.tmdbBaseUrl}/movie/${id}/credits?api_key=${environment.tmdbApiKey}`)
  }
}
