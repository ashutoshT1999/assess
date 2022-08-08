import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { employee } from './employee/employee.component';
import { employeelist } from './employeelist/employeelist.component';

const routes: Routes = [
  {path:'employee',component:employee},
  {path:'employeelist',component:employeelist}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
