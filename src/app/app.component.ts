// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormVisible = false; 
  isChartVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  toggleChart() {
    this.isChartVisible = !this.isChartVisible;
  }
}
