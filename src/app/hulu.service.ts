import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hulu } from './types/Hulu';

@Injectable({
  providedIn: 'root'
})
export class HuluService {
  // BASE_URL = 'http://localhost:8080/'

  constructor() { }

  // getHulu(): Observable<Hulu[]> {
  //   return this.http.get<Hulu[]>(this.BASE_URL + 'hulu');
  // }
}
