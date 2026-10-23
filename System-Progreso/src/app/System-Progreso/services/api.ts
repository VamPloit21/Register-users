import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progreso } from '../domain/model/Progreso.entity';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private fullUrl = `${environment.apiBaseUrl}${environment.usersEndpoint}`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Progreso[]> {
    return this.http.get<Progreso[]>(this.fullUrl);
  }
}