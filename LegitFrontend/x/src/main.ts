// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Ensure this path matches your folder structure

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide routing configuration
  ]
}).catch(err => console.error(err));
