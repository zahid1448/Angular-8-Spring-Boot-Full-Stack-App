import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  employee:Employee
  constructor(private route:ActivatedRoute,
     private employeService:EmployeeserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }
  
}
