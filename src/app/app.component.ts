import { Component, Inject } from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  username:string = "";
  password:string = "";
  msg:string = "";

  constructor(@Inject(LoginService) private s:LoginService){
  }

  CheckLogin(txt1:any){
    if(this.s.checkUsernameAndPassword(this.username, this.password)==true){
      this.msg = "Successfull Login";
    }else{
      this.msg = "Invalid Login";
      txt1.focus();
    }
  }
}
