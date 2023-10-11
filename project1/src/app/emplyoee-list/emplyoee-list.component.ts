import { Component , OnInit} from '@angular/core';
// import { EmpyoeeService } from './empyoee.service';
import { Route, Router } from '@angular/router';

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

  employees:EmplyoeeListComponent[] =[];

  constructor(private route:Router) { }

  ngOnInit(): void{

  }
   

}
