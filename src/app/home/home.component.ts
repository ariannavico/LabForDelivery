import { Component, OnInit } from '@angular/core';
import { SharedServiceHome } from 'src/services/sharedServiceHome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public sharedService : SharedServiceHome) { }


  

  ngOnInit(): void {
 
  }
  
  




  
}
