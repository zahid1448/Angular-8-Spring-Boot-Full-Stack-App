import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees:Employee[];
  constructor(private employeeService:EmployeeserviceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }
getEmployee(){
  this.employeeService.getEmployeeList().subscribe(data=>{
this.employees=data;
  });
}
updateEmployee(id:number){
  this.router.navigate(['update-employee',id]);
}

employeeDetails(id:number){
  this.router.navigate(['employee-details',id]);
}

deleteEmployee(id:number){
  this.employeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployee();
  });
}
}
