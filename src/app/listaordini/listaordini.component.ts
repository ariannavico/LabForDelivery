import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-listaordini',
  templateUrl: './listaordini.component.html',
  styleUrls: ['./listaordini.component.scss']
})
export class ListaordiniComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(  ): void {
    this.sharedService.getListaOrdiniEffettuati()
  }

}
