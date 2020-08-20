import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.interface';
import { employeeData } from '../fake-json/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employeeData: Employee[] = [];
  constructor() { }

  public setEmployee(obj: Employee) {
    this.employeeData.push(obj);
  }

  public getEmployees() {
    this.employeeData = employeeData.data;
    return this.employeeData;
  }

  public findEmployee(employeeId: string) {
    return this.employeeData.find(e => e.employeeId == employeeId);
  }

  public editEmployee(employeeObj: Employee) {
    const employeeIndex = this.employeeData.findIndex(e => e.employeeId == employeeObj.employeeId);
    this.employeeData.splice(employeeIndex, 1, employeeObj);
  }

  public deleteEmployee(employeeIndex: number) {
    this.employeeData.splice(employeeIndex, 1);
  }
}
