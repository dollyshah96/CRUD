import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'employee-details', pathMatch: 'full'
  },
  {
    path: 'employee-details', component: EmployeeTableComponent
  },
  {
    path: 'add', component: EmployeeFormComponent
  },
  {
    path: 'edit/:id', component: EmployeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
