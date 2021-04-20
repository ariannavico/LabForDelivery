import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';
import { SharedServiceForm } from 'src/services/sharedServiceForm';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  constructor(public sharedServiceForm : SharedServiceForm, public sharedService : SharedService) { }

  ngOnInit(): void {
  }

}
