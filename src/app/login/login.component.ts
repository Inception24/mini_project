import { Component,EventEmitter,Input,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor() {}
  @Input() hideComponent: boolean = false;
  @Output() hideComponentChange = new EventEmitter<boolean>();

      @Input() fname:any;
      @Input() lname:any;
      @Input() mailid:any;
      @Input() dob:any;

      ngOnInit(): void {
        this.hideComponentChange.emit(true);

    this.fname = localStorage.getItem('firstname');
    this.lname = localStorage.getItem('lastname');
    this.mailid = localStorage.getItem('email');
    this.dob = localStorage.getItem('DateOfBirth');
  }

   }




