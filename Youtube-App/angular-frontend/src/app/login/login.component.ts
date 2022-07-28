import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) { }
  login : Login = new Login();
  msg : string | undefined;
  user : Login = new Login();
  ngOnInit(): void {
  }
  onSubmit()
  {
    this.Login();
  }
  Login()
  {
    this.loginService.checkUser(this.login).subscribe(data=>{
      this.user=data;
      console.log(data);
      this.gotoPage();
    },error=>{
      console.log("Bad Credentials");
      this.msg = "Bad Credentials!!! EmailId or Password is Incorrect";
    })
  }
  gotoPage()
  {
    this.router.navigate(['/userpage', this.user.username]);
  }

}
