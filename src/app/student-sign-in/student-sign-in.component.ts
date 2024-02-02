import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './student-sign-in.component.html',
  styleUrl: './student-sign-in.component.css'
})
export class StudentSignInComponent {
  constructor(public route : Router){}
  public password : string = "";
  public email : string = "";
  public confirm: boolean = false
  public error: string = ""
  public currentUserArray : any = []



  studentSignIn(){
    const getStudent = JSON.parse(localStorage['Crown'])
    // console.log(getStudent);
    

    let newUser = getStudent.find((student:any, index:number) => this.email === student.email && this.password === student.password)
    // console.log(newUser);

    if(newUser == undefined){
      this.confirm = true;
      this.error = "This user is not found!"
      setTimeout(() => {
        this.error = "";
        this.confirm = false;
      }, 3000)
    }
    else{
      this.currentUserArray = [...this.currentUserArray, newUser]
      localStorage.setItem("CurrentUser", JSON.stringify(this.currentUserArray))

      if(newUser.option === "Admin"){
        this.route.navigate(['/dashboard'])
      }
      else{
        this.route.navigate(['/userDashboard'])
      }
    }
    


  }
}
