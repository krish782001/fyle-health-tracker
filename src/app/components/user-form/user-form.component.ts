
import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = {
    name: '',
    workoutType: '',
    workoutMinutes: 0,
  };

  workoutTypes = ['Running', 'Cycling', 'Swimming', 'Yoga'];
minutes: any;

  constructor(private userService: UserService) {}

  addUser() {
    if (this.user.name && this.user.workoutType && this.user.workoutMinutes) {
      this.userService.addUser(this.user);
      this.user = { name: '', workoutType: '', workoutMinutes: 0 };
    }
  }
}
