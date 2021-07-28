import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/ResponsePageable.model';

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

  public getMoviesWithFilter(filterOption: string, filterValue: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?value' + filterValue + 'filterOption' + filterOption);
  }

}
