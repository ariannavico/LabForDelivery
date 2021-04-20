import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-ristoranti',
  templateUrl: './ristoranti.component.html',
  styleUrls: ['./ristoranti.component.scss'],
})
export class RistorantiComponent implements OnInit {
  constructor(public sharedService: SharedService) {}
  

  ngOnInit(): void {
    this.sharedService.getRistoranti();
    
  }

}

