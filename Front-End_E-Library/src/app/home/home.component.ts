import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flag:boolean=true;


  constructor(private router : Router){}


  route(){
    this.flag=!this.flag;
    this.router.navigate(['/Login'])
  }


  route1(){
    this.flag=!this.flag;
    this.router.navigate(['/Register'])
  }


}
