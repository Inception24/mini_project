import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup:any;
  fname:any;
  lname:any;
  mailid:any;
  dob:any;
  hideComponent: boolean = true;

  constructor() {

   }

  ngOnInit() {
    this.signup = new FormGroup({
      firstname: new FormControl('', [Validators.required,Validators.minLength(5)]),
      lastname: new FormControl(''),
      Mobilenumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('((?=.*?[0-9])(?=.*?[@!$*])(?=.*[a-z])(?=.*[A-Z]).{8,})')]),
      Confirmpassword: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required])
      })
  }

   get firstname() {
    return this.signup.get('firstname');
  }

  get lastname() {
    return this.signup.get('lastname');
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

  get Mobilenumber() {
    return this.signup.get('Mobilenumber');
  }

  get DateOfBirth() {
    return this.signup.get('DateOfBirth');
   }

   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){

    localStorage.setItem('firstname',this.signup.value.firstname);
    localStorage.setItem('lastname', this.signup.value.lastname);
    localStorage.setItem('email', this.signup.value.email);
    localStorage.setItem('DateOfBirth', this.signup.value.DateOfBirth);



   }

  }
