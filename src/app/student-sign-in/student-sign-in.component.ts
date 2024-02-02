import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-sign-in.component.html',
  styleUrl: './student-sign-in.component.css'
})
export class StudentSignInComponent {
  public password : string = "";
  public email : string = "";
  



  studentSignIn(){
    const getStudent = JSON.stringify(localStorage['Crown'])
    console.log(getStudent);
    

  }
}
