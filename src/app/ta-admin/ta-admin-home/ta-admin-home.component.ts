import { Component } from '@angular/core';

export interface Requisition {
  reqno: number;
  grade: number;
  hmemployeeid: number;
  hmemailid: string;
  jdurl: string;
  assignment: string;
  positionsopen: number;
  glcode: number;
  location: string;
  title: string;
  resource: string;
}

@Component({
  selector: 'app-ta-admin-home',
  templateUrl: './ta-admin-home.component.html',
  styleUrls: ['./ta-admin-home.component.css']
})
export class TaAdminHomeComponent {
  displayedColumns: string[] = ['reqno', 'grade', 'hmemployeeid', 'hmemailid','jdurl','assignment','glcode','location','title','resource'];
}
