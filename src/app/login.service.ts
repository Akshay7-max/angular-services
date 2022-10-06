import { Injectable } from '@angular/core';
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [
    new User("Ram", "ram123"),
    new User("Shyam", "shyam123"),
    new User("Krishna", "krishna123"),
    new User("Hari", "hari123"),
  ]

  constructor() { }

  checkUsernameAndPassword(username: string, password: string): boolean {
    var count = 0;

    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].username == username && this.users[i].password == password) {
        count++;
      }
    }

    if (count == 1) {
      return true;
    } else {
      return false;
    }
  }
}
