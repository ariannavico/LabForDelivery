import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';
import { SharedServiceForm } from 'src/services/sharedServiceForm';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sharedService : SharedService, public sharedServiceForm : SharedServiceForm ) { }
 

  ngOnInit(): void {
  }


}
