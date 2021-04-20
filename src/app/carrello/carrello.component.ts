import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    
  }


   


  
  
}
