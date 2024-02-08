import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;
  loginform: FormGroup;
  flag: boolean = false;
  constructor(private service: LoginService, private router: Router) {
    this.loginform = new FormGroup(
      {
        emailId: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required, Validators.pattern('')]),
      }
    );

    this.user = new User();
  }
  login(data: any) {
    this.user.emailId = data.emailId;
    this.user.password = data.password;
    this.service.login(this.user).subscribe(
      (resultdata: any) => {
        console.log(resultdata)
        if (resultdata.message == "Admin Success") {
          this.router.navigate(['/Book']);
        } else if (resultdata.message == "User Success") {
          this.router.navigate(['/user']);
        }
        else {
          alert("Invalid User");
        }
      });
  }
  changediv() {
    this.flag = !this.flag;
  }
}
