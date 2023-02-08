import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaAdminHomeComponent } from './ta-admin-home/ta-admin-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ResourceComponent } from './resource/resource.component'
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TaAdminHomeComponent,
    ResourceComponent
  ],
  imports: [
    CommonModule, MatToolbarModule, MatPaginatorModule, MatTableModule, MatCardModule, RouterModule, MatButtonModule
  ]
})
export class TAAdminModule { }
