import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplyoeeListComponent } from './emplyoee-list/emplyoee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [{path:'',component:EmplyoeeListComponent},
                        {path:'create-employee',component:CreateEmployeeComponent},
                        
                        ];
                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
