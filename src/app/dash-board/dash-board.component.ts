import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  constructor(public navigate : Router){}
  public allStudents: any = []

  ngOnInit(){
    const getStudents = JSON.parse(localStorage['Crown']);
    // console.log(getStudents);

   let newStudents = getStudents.find((select : any, i : number) => select.option === "Student");
  //  console.log(newStudents);
    this.allStudents = [...this.allStudents, newStudents];    
  }

  logout(){
    localStorage.removeItem('CurrentUser');
    this.navigate.navigate(['/signIn'])
  }
}
