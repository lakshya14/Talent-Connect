import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HmComponent } from './hm/hm.component';
import { TAMemberComponent } from './ta-member/ta-member.component';
import { TAAdminComponent } from './ta-admin/ta-admin.component';
import { PanelistComponent } from './panelist/panelist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'hm', component: HmComponent },
  { path: 'admin', component: TAAdminComponent },
  { path: 'member', component: TAMemberComponent },
  { path: 'panel', component: PanelistComponent }
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
