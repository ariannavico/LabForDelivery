import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-menu-risto',
  templateUrl: './menu-risto.component.html',
  styleUrls: ['./menu-risto.component.scss']
})
export class MenuRistoComponent implements OnInit {

  constructor(public sharedService : SharedService) { }


  ngOnInit(): void {
    this.sharedService.getMenu()
    
  }
}
