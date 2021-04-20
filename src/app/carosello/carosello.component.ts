import { Component, OnInit } from '@angular/core';
import { SharedServiceHome } from 'src/services/sharedServiceHome';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.scss'],
})

export class CaroselloComponent implements OnInit {
  constructor(public sharedService : SharedServiceHome) {}

  

  ngOnInit(): void {
    this.sharedService.onResize()
  }

}
