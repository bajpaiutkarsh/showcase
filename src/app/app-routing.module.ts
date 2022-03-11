import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicaddfieldsComponent } from './dynamicaddfields/dynamicaddfields.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, data:{name:'Choose Demo'}},
  {path:'dynamicaddfields', component: DynamicaddfieldsComponent, data:{name:'Add/Remove Fields in Forms'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
