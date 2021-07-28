import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../model/Filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  apiUrl = 'http://localhost:8080/buscaEvento';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMoviesWithFilter(filterOption: string, filterValue: string): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.apiUrl + '?value' + filterValue + 'filterOption' + filterOption);
  }

}
