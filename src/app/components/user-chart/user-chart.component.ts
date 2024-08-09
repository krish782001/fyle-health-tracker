// src/app/components/user-chart/user-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css'],
})
export class UserChartComponent implements OnInit {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [{ data: [] }],
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.updateChart();
  }

  private updateChart() {
    const users = this.userService.getUsers();
    const workoutTypes = [...new Set(users.map((user) => user.workoutType))];
    const workoutData = workoutTypes.map((type) =>
      users
        .filter((user) => user.workoutType === type)
        .reduce((sum, user) => sum + user.workoutMinutes, 0)
    );

    this.pieChartData.labels = workoutTypes;
    this.pieChartData.datasets[0].data = workoutData;
  }
}
