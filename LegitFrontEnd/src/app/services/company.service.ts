import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly apiUrl = 'http://localhost:5000/api/company-data'; // Replace with your actual API URL

  constructor(private readonly http: HttpClient) {}

  getCompanyDetails(name: string): Observable<any> {
      const formattedCompanyName = name.toUpperCase().replace(/\s/g, ''); // Remove spaces and convert to uppercase

      return this.http.get<any>(`${this.apiUrl}/${formattedCompanyName}`);
  }
}
