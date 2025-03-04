import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import the router module if needed
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Indicating this component is also standalone
  imports: [RouterModule, HeaderComponent, FooterComponent]  // Import the standalone components you need here
})
export class AppComponent {
  title = " nothing";
}
