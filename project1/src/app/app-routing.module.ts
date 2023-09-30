import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplyoeeListComponent } from './emplyoee-list/emplyoee-list.component';

const routes: Routes = [{path:'',component:EmplyoeeListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
