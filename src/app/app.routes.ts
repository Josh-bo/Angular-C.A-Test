import { Routes } from '@angular/router';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { StudentSignInComponent } from './student-sign-in/student-sign-in.component';

export const routes: Routes = [
    {path: '', component: StudentSignUpComponent},
    {path: 'signIn', component: StudentSignInComponent},

];
