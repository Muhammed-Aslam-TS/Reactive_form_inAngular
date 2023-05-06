import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder){}

  submit = false
  RegistrationForm =this.fb.group({
    FirstName :['',Validators.required],
    LastName :['',Validators.required],
    Phone :['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    Email :['',[Validators.required,Validators.email]],
  })

  get f(){
    return this.RegistrationForm.controls
  }
  onsubmit(){
    this.submit = true
    console.log('clicked');
    console.log('f',this.f);
  }




}
