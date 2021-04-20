import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { LoginComponent } from './forms/login/login.component';
import { RegistrazioneComponent } from './forms/registrazione/registrazione.component';
import { RicordaPComponent } from './forms/ricorda-p/ricorda-p.component';
import { HomeComponent } from './home/home.component';
import { ListaordiniComponent } from './listaordini/listaordini.component';
import { MenuRistoComponent } from './menu-risto/menu-risto.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { RistorantiComponent } from './ristoranti/ristoranti.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'ricordaP', component: RicordaPComponent},
  {path: 'ristoranti', component: RistorantiComponent},
  {path: 'ristoranti/menu', component: MenuRistoComponent},
  {path: 'carrello', component: CarrelloComponent},
  {path: 'ordini', component: OrdiniComponent},
  {path: 'listaordini', component: ListaordiniComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
