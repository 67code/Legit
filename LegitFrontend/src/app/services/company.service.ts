import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly apiUrl = 'https://your-backend-api.com/company'; // Replace with your actual API URL

  constructor(private readonly http: HttpClient) {}

  getCompanyDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?name=${name}`);
  }
}
