import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-company-details',
  standalone: true,
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CompanyDetailsComponent {
  companyData: any = null;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private readonly route: ActivatedRoute, private readonly companyService: CompanyService) {
    this.route.params.subscribe(params => {
      const companyName = params['name'];
      if (companyName) {
        this.getCompanyDetails(companyName);
      }
    });
  }

  getCompanyDetails(name: string) {
    this.loading = true;
    this.companyService.getCompanyDetails(name).subscribe({
      next: (data) => {
        this.companyData = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Company not found!';
        this.loading = false;
      }
    });
  }
}
