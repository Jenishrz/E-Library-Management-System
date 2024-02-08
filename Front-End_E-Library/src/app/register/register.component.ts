import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerform: FormGroup;
  user: User;
  result: string = " ";

  constructor(private service: RegisterService) {

    this.registerform = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('')]),
        emailId: new FormControl('', [Validators.required, Validators.pattern('')]),
        mobileNumber: new FormControl('', [Validators.required, Validators.pattern('')]),
        userType: new FormControl('', [Validators.required, Validators.pattern('')]),
        address: new FormControl('', [Validators.required, Validators.pattern('')]),
        password: new FormControl('', [Validators.required, Validators.pattern('[A-Z a-z0-9.@_]+')]),
      });
    this.user = new User();
  }
  insert(data: any) {
    this.user.userName = data.userName;
    this.user.emailId = data.emailId;
    this.user.mobileNumber = data.mobileNumber;
    this.user.userType = data.userType;
    this.user.address = data.address;
    this.user.password = data.password;
    
    this.result = this.service.insert(this.user);
  }
}
