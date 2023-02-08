import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  HmHomepageComponent } from './hiring-manager/hm-homepage/hm-homepage.component';
import { TaAdminHomeComponent } from './ta-admin/ta-admin-home/ta-admin-home.component';
import {   TaMemberHomeComponent} from './ta-member/ta-member-home/ta-member-home.component';
import { PanelistHomeComponent } from './panelist/panelist-home/panelist-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourceComponent } from './ta-admin/resource/resource.component';
const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'hm', component: HmHomepageComponent },
  { path: 'admin',  children: [
    {
        path: 'resource',    
        component: ResourceComponent,
    },
    {
      path:'', 
      component: TaAdminHomeComponent,
    },
  ]},
  { path: 'member', component: TaMemberHomeComponent },
  { path: 'panel', component: PanelistHomeComponent },
  //{ path: 'admin/resource', component: ResourceComponent }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
