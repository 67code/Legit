import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly apiUrl = 'http://localhost:5020/api/company-data'; // Ensure this API is correct

  constructor(private readonly http: HttpClient) {}

  getCompanyDetails(name: string): Observable<any> {
    const formattedCompanyName = name.toUpperCase().replace(/\s/g, ''); // Normalize name

    return this.http.get<any>(`${this.apiUrl}/${formattedCompanyName}`).pipe(
      catchError(error => {
        console.error('API request failed:', error);
        return throwError(() => new Error('API request failed.')); // Return an error observable
      })
    );
  }
}
