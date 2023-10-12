import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpyoeeService {
  baseurl:any="https://bzadevops.co.in/GMS/api"
  constructor(private httpclient:HttpClient) {}
  
  log_check(data:any)
    {
      return this.httpclient.post(this.baseurl+'/login',data)
    }

  getEmployees(data:any)
  {
    
  }
}


