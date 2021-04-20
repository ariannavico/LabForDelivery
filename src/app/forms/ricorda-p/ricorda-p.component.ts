import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';
import { SharedServiceForm } from 'src/services/sharedServiceForm';

@Component({
  selector: 'app-ricorda-p',
  templateUrl: './ricorda-p.component.html',
  styleUrls: ['./ricorda-p.component.scss']
})
export class RicordaPComponent implements OnInit {

  constructor(public sharedServiceForm : SharedServiceForm, public sharedService : SharedService) { }

  ngOnInit(): void {
  }

}
