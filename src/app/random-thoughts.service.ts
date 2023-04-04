import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomThought } from './dto/random-thought';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})
export class RandomThoughtsService {

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<RandomThought[]> {
    const url = `${environment.backendApiUrl}/random-thoughts/thoughts`;
    return this.http.get<RandomThought[]>( url, httpOptions);
  }

  saveThought(thought: RandomThought): Observable<any> {
    const url = `${environment.backendApiUrl}/random-thoughts/save-thought`;
    return this.http.post(url, thought, httpOptions);
  }
}
