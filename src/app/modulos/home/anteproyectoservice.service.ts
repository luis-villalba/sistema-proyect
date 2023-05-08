import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeModule } from './home.module';

@Injectable({
  providedIn: 'root'
})
export class AnteproyectoserviceService {
  apiUrl= 'http://localhost:50759/'
  constructor(private http: HttpClient) { }
  getAllAnteproyectos(): Observable<HomeModule[]> {
    return this.http.get<HomeModule[]>(this.apiUrl);
  }
  getAnteproyectoById(id: number): Observable<HomeModule> {
    return this.http.get<HomeModule>(`${this.apiUrl}/${id}`);
  }

}
