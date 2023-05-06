import { Component } from '@angular/core';
import {  FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}
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

