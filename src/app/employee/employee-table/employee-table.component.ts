import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.interface';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  public employeeList: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();
  }

  public addEmployees() {
    this.router.navigateByUrl('/add');
  }

  public onEdit(data: Employee) {
    this.router.navigateByUrl(`/edit/${data.employeeId}`);
  }

  public delete(index: number) {
    this.employeeService.deleteEmployee(index);
  }
}
