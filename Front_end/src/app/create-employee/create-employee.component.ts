import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee: Employee= new Employee();
  constructor(private clientHttp:EmployeeserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.employee);
  this.saveEmployee();
  this.toNavigateEmployeeList();
}

saveEmployee(){
  this.clientHttp.createEmployee(this.employee).subscribe(data=>{
console.log(data);
  },
error=>console.log(error)
  );
}
//it's navigate the employee
toNavigateEmployeeList(){
this.router.navigate(["/employee"]);
}

}
