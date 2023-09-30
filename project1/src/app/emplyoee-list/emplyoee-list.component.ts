import { Component , OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void{

  }
   

}
