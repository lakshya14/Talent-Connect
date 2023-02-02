import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaAdminHomeComponent } from './ta-admin-home/ta-admin-home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import {MatToolbarModule} from '@angular/material/toolbar'; 


@NgModule({
  declarations: [
    TaAdminHomeComponent
  ],
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class TAAdminModule { }
