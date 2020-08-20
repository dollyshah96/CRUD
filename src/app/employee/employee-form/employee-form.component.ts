import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeFG = new FormGroup({
    employeeId: new FormControl(''),
    employeeName: new FormControl(''),
    Department: new FormControl('')
  });
  public formType: string;
  constructor(private employeeService: EmployeeService, private location: Location, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {


    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const employee = this.employeeService.findEmployee(id);
    if (employee) {
      this.employeeFG.controls.employeeName.setValue(employee.employeeName);
      this.employeeFG.controls.Department.setValue(employee.Department);
      this.employeeFG.controls.employeeId.setValue(employee.employeeId);
    }


    if (this.router.url == '/add') {
      this.employeeFG.reset();
      this.formType = 'add';
    } else {
      this.formType = 'edit';
    }
  }

  public onBack() {
    this.location.back();
  }

  public onSubmit() {
    if (this.formType == 'add') {
      const uniqueId = `E${Math.random()}`;
      this.employeeFG.controls.employeeId.setValue(uniqueId);
      this.employeeService.setEmployee(this.employeeFG.value);
      this.employeeFG.reset();
      this.router.navigateByUrl('/employee-details');
    } else {
      this.employeeService.editEmployee(this.employeeFG.value);
      this.employeeFG.reset();
      this.router.navigateByUrl('/employee-details');
    }
  }
}
