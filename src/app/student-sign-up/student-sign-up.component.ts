import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

interface eachUserDetails {
  fullName : string;
  email : string;
  phoneNumber : Number ;
  age : number ;
  student_Id : number ;
  password : string ;
  gender : string ;
  address : string ;
  option : string ;
}


@Component({
  selector: 'app-student-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './student-sign-up.component.html',
  styleUrl: './student-sign-up.component.css'
})
export class StudentSignUpComponent {

  constructor(public navigate : Router ){}

  public fullName : string = "";
  public email : string = "";
  public phoneNumber : any = "";
  public age : any  = "";
  public student_Id : number = 0;
  public gender : string = "";
  public address : string = "";
  public option : string = "";
  public password : string = "";
  public message : string = "";
  public allStudentArray : eachUserDetails [] = [];
  public confirm: boolean = false



  studentSignUp(){
    const userObj : eachUserDetails = {
      fullName : this.fullName,
      email : this.email,
      phoneNumber : this.phoneNumber,
      age : this.age,
      student_Id : Math.floor(Math.random() * 900000) + 100000,
      password : this.password,
      gender : this.gender,
      address : this.address,
      option : this.option
    }

    this.allStudentArray = [...this.allStudentArray, userObj]
    
    
    if(this.allStudentArray){
      localStorage.setItem("Crown", JSON.stringify(this.allStudentArray));
      this.navigate.navigate(['/signIn']);
   }
   else{
    this.confirm = true;
    this.message = "Registration is not successful !"
    setTimeout(() => {
      this.message = ""
      this.confirm = false;
    }, 3000)
   }

  }

  ngOnInit(){
      if(localStorage['Crown']){
        this.allStudentArray = JSON.parse(localStorage['Crown']);
      }
  }

}
