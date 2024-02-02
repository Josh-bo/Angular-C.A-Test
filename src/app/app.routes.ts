import { Routes } from '@angular/router';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { StudentSignInComponent } from './student-sign-in/student-sign-in.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { adminGuardGuard } from './guards/admin-guard.guard';

export const routes: Routes = [
    {path: '', component: StudentSignUpComponent},
    {path: 'signIn', component: StudentSignInComponent},
    {path: '', children: [
        {path: 'dashboard', component: DashBoardComponent},
    ], canActivate:[adminGuardGuard]},
    {path: 'userDashboard', component: UserDashboardComponent},

];
