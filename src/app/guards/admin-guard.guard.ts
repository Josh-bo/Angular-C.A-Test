import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const routing = inject(Router)

  if (localStorage['CurrentUser']) {
    const getAdmin = JSON.parse(localStorage['CurrentUser']);
  
    // Check if getAdmin is an array before using find
    if (Array.isArray(getAdmin)) {
      let newStudents = getAdmin.find((select : any, i : number) => select.option == "Admin");
      console.log(newStudents);
    } else {
      console.error("CurrentUser is not an array");
    }
  } else {
    console.error("CurrentUser not found in localStorage");
  }
  

  return true;
};
