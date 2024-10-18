import { Injectable } from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, name: 'john_doe', username: 'johndoe', password: 'password123' },
    { id: 2, name: 'jane_smith', username: 'janesmith', password: 'pass456' },
    { id: 3, name: 'mike_jones', username: 'mikejones', password: 'qwerty789' },
    { id: 4, name: 'anna_karenina', username: 'annakarenina', password: 'securepass' }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

}
