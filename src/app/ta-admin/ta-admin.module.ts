import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaAdminHomeComponent } from './ta-admin-home/ta-admin-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  


@NgModule({
  declarations: [
    TaAdminHomeComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatPaginatorModule,MatTableModule
  ]
})
export class TAAdminModule { }
