import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'workoutType', 'workoutMinutes'];
  dataSource = new MatTableDataSource<User>([]);
  searchName = '';
  selectedWorkoutType = '';
  workoutTypes = ['Running', 'Cycling', 'Swimming', 'Yoga'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.dataSource.data = this.userService.getUsers();
  }

  filterUsers() {
    const filteredUsers = this.userService.filterUsers(
      this.searchName,
      this.selectedWorkoutType
    );
    this.dataSource.data = filteredUsers;
    this.paginator.length = filteredUsers.length;

    if (this.paginator) {
      this.paginator.firstPage();
    }
  }
}