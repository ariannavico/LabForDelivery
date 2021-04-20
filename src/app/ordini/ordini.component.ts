import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';
import { SharedServiceForm } from 'src/services/sharedServiceForm';


@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.scss']
})
export class OrdiniComponent implements OnInit {

  constructor(public sharedService: SharedService, public SharedServiceForm : SharedServiceForm) { }

  ngOnInit(): void {
    
  }

}
