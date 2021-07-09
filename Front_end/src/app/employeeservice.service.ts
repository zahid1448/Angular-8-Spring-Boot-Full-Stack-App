import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private baseUrl="http://localhost:8080//api/v1/employee";
  constructor(private httpClient:HttpClient) { }
  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  //post
  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`,employee);
  }
  //create
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>('${this.baseUrl}/${id}');
  } 
  //update
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }
//delete
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
}
