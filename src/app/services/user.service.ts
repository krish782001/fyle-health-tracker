import { Injectable } from '@angular/core';

export interface User {
  name: string;
  workoutType: string;
  workoutMinutes: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private localStorageKey = 'users';

  constructor() {
    this.initData();
  }

  private initData() {
    const initialData: User[] = [
      { name: 'Alice', workoutType: 'Running', workoutMinutes: 30 },
      { name: 'Bob', workoutType: 'Cycling', workoutMinutes: 45 },
      { name: 'Charlie', workoutType: 'Swimming', workoutMinutes: 25 },
    ];
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(initialData));
    }
  }

  getUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem(this.localStorageKey)!) || [];
    } catch (e) {
      console.error('Error parsing users from localStorage', e);
      return [];
    }
  }

  addUser(user: User) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  filterUsers(name: string, workoutType: string): User[] {
    return this.getUsers().filter((user) => {
      const matchesName = name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
      const matchesWorkoutType = workoutType ? user.workoutType === workoutType : true;
      return matchesName && matchesWorkoutType;
    });
  }
}
