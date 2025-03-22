import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
    styleUrl: './mission.component.css',
    imports: [FormsModule],
})
export class MissionComponent {
   companyName: string = '';
  constructor(private readonly router: Router) {}
  missionText1: string = "Not Every Store Is Legit ";
  missionText2: string = "But We’ll Tell You Which Ones Are !";
 searchCompany() {
    if (!this.companyName.trim()) return;

    // Navigate to the company details page with the company name as a parameter
    this.router.navigate(['/company-details', this.companyName]);
  }
}

