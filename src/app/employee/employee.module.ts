import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: EmployeeTableComponent
  },
  {
    path: 'add', component: EmployeeFormComponent
  },
  {
    path: 'edit/:id', component: EmployeeFormComponent
  }
];


@NgModule({
  declarations: [EmployeeFormComponent, EmployeeTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [EmployeeTableComponent, RouterModule]
})
export class EmployeeModule { }
