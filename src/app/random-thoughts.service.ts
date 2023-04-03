import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomThought } from './dto/random-thought';


const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})
export class RandomThoughtsService {

  private randomThoughtUrl = 'http://localhost:8080/random-thoughts'

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<RandomThought[]> {
    const url = `${this.randomThoughtUrl}/thoughts`;
    return this.http.get<RandomThought[]>( url, httpOptions);
  }

  saveThought(thought: RandomThought): Observable<any> {
    const url = `${this.randomThoughtUrl}/save-thought`;
    return this.http.post(url, thought, httpOptions);
  }
}
