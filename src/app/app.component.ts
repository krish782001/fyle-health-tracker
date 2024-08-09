// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormVisible = false; // Controls the visibility of the form
  isChartVisible = false; // Controls the visibility of the chart

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  toggleChart() {
    this.isChartVisible = !this.isChartVisible;
  }
}
