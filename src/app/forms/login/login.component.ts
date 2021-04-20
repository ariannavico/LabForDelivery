import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';
import { SharedServiceForm } from 'src/services/sharedServiceForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public sharedServiceForm : SharedServiceForm, public sharedService : SharedService) { }

  ngOnInit(): void {
  }

}
