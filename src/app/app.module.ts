import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {AgmCoreModule} from '@agm/core';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CollaboraConNoiComponent } from './collabora-con-noi/collabora-con-noi.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RistorantiComponent } from './ristoranti/ristoranti.component';
import { MenuRistoComponent } from './menu-risto/menu-risto.component';
import { ScaricaAppComponent } from './scarica-app/scarica-app.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CaroselloComponent } from './carosello/carosello.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedService } from 'src/services/sharedService';
import { SharedServiceForm } from 'src/services/sharedServiceForm';
import { SharedServiceHome } from 'src/services/sharedServiceHome';
import { OrdiniComponent } from './ordini/ordini.component';
import { LoginComponent } from './forms/login/login.component';
import { RegistrazioneComponent } from './forms/registrazione/registrazione.component';
import { RicordaPComponent } from './forms/ricorda-p/ricorda-p.component';
import { ListaordiniComponent } from './listaordini/listaordini.component';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  overlayColor: "rgba(255,255,255,0.90)",
  fgsColor: '#e75a7c',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 120,
  fgsType: SPINNER.ballSpinClockwise,
  pbColor: 'transparent',
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 6, // progress bar thickness
}; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CollaboraConNoiComponent,
    FooterComponent,
    RistorantiComponent,
    MenuRistoComponent,
    ScaricaAppComponent,
    CarrelloComponent,
    CaroselloComponent,
    OrdiniComponent,
    LoginComponent,
    RegistrazioneComponent,
    RicordaPComponent,
    ListaordiniComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    SlickCarouselModule,
    /* per far funzionare l'autocomplete */
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4-prmer-akGN2xFpdBQtLBvEp_hrMqIc',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule,
    /* fine autocomplete */
    
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [
    SharedService,
    SharedServiceForm,
    SharedServiceHome
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
