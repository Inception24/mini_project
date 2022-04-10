import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
public signup:any;

  constructor() { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      firstname: new FormControl('', [Validators.required,Validators.minLength(5)]),
      lastname: new FormControl(),
      Mobilenumber: new FormControl(),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('((?=.*?[0-9])(?=.*?[@!$*])(?=.*[a-z])(?=.*[A-Z]).{8,})')]),
      Confirmpassword: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl(),
    })
  }
  get firstname() {
    return this.signup.get('firstname');
  }

  get lastname() {
    return this.signup.get('lastname');
  }

  get Mobilenumber() {
    return this.signup.get('email');
  }
  get email() {
    return this.signup.get('email');
  }
  get password() {
    return this.signup.get('password');
  }
  get Confirmpassword() {
    return this.signup.get('Confirmpassword');
  }
  get DateOfBirth() {
    return this.signup.get('DateOfBirth');
  }

  onSubmit(){
    console.log(this.signup.value);
    this.signup.reset();
}

}
