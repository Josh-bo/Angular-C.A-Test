import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const routing = inject(Router)

  if (localStorage['CurrentUser']) {
    const getAdmin = JSON.parse(localStorage['CurrentUser']);
      if (Array.isArray(getAdmin) || getAdmin != null) {
        let newStudents = getAdmin.find((select : any, i : number) => select.option === "Admin");
        console.log(newStudents);
      } else {
        console.error("CurrentUser is not an array");
        routing.navigate(['/signIn'])
      }
    }
  else {
   console.error("CurrentUser not found in localStorage");
   routing.navigate(['/signIn'])
 }
  

  return true;
};
