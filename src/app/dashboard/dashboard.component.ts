import { Component } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){
  }
  navigate(){
  //do your any operations
  this.router.navigate(['hm']);
  
  }
}
