import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
  export class SharedServiceHome {
    constructor() {}

 /* dati per la form di google */ 
    
  zoom: number | undefined
  latitude: number | undefined;
  longitude: number | undefined;
  public selectedAddress: any;

  indirizzo:any 
  errore:boolean = false

  
  onAutocompleteSelected(result: any) {
    console.log('onAutocompleteSelected: ', result);
    this.indirizzo = {
      civico: result.address_components[0].long_name,
      via: result.address_components[1].long_name,
      cap: result.address_components[5].long_name,
      citta: result.address_components[2].long_name,
      provincia: result.address_components[4].short_name,
      stato: result.address_components[6].long_name
    }
    if(this.indirizzo.via === this.indirizzo.citta){
      this.errore =  true
    }
    else{
      this.errore =  false
    }
    console.log(this.indirizzo );
    
  }

  onLocationSelected(location: any) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  /* dati per la form di google */ 

  public innerWidth: any;
  
  slides = [
    { img: '../../assets/slide/American Bistrot.jpg' },
    { img: "../../assets/slide/Bakery 'n Roasters2.jpg" },
    { img: '../../assets/slide/Banana Republic.jpg' },
    { img: '../../assets/slide/Bonci Pizzarium.jpg' },
    { img: '../../assets/slide/Banana Republic2.jpg' },
    { img: '../../assets/slide/Le Carré Français3.jpg' },
    { img: '../../assets/slide/Banana Republic3.jpg' },
    { img: '../../assets/slide/Bonci Pizzarium3.jpg' },
    { img: '../../assets/slide/Bu.bus2.jpg' },
    { img: '../../assets/slide/Le Carré Français2.jpg' },
    { img: '../../assets/slide/Ippokrates.jpg' },
    { img: '../../assets/slide/Kebab 1262.jpg' },
    { img: '../../assets/slide/Kishi.jpg' },    
    { img: '../../assets/slide/Dawali3.jpg' },
    { img: '../../assets/slide/La Spaghetteria.jpg' }
  ];
  slideConfig = {};


  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else  {
      this.slideConfig = { slidesToShow: 5, slidesToScroll: 5 };
    }
  }


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
  }  