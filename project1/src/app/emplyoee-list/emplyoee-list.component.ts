import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpyoeeService } from '../empyoee.service';

@Component({
  selector: 'app-emplyoee-list',
  templateUrl: './emplyoee-list.component.html',
  styleUrls: ['./emplyoee-list.component.css']
})
export class EmplyoeeListComponent implements OnInit {
  updateEmployee:any;
  deleteEmployee:any;
  employeeDetails:any;
  firstName:any;
  lastName:any;
  emailId:any
  id:any;

  constructor(private empyoee:EmpyoeeService, private route:Router) { }

  ngOnInit(): void{
    this.getEmployees();

  }
  employee_list:any=[];
  getEmployees() {
    this.empyoee.getEmployees({ firstName: this.firstName, lastName: this.lastName, emailId: this.emailId })
      .subscribe((res: any) => {
        this.employee_list= res;
      });
  }  

}
 


 