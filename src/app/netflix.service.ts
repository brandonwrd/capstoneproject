import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Netflix } from './types/Netflix';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  // BASE_URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  // getNetflix(): Observable<Netflix[]> {
  //   return this.http.get<Netflix[]>(this.BASE_URL + 'netflix');
  // }
}
