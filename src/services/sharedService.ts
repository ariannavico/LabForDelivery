import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

const urlRistoranti =
  'http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/list';
const urlMenuRistorante =
  ' http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/ristoranti-prodotti&IdRistorante=';
const urlPostOrdine =
  'http://l4com.labforweb.it/backend/web/test/ws/users/insertOrdine.php?r=ordini/insertid_usr='
const urlDettaglioOrdineEffettuato =
  'http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordine&IdOrdine='
const urlOrdiniEffettuati =
  'http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr='

  // tslint:disable-next-line: align
  @Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient,   public ngxService: NgxUiLoaderService ) {}

  nomeRistorante:string =''
  // serve per poter visualizzare l'immagine nell html in accoppiata con logo (valore restituito dall' API)
  imgLogo: string = 'http://l4com.labforweb.it/backend/web/img/ristoranti/';
  // logo: string = '';
  ristoranteSelezionatoOgg:any = {}
  costiConsegna: number = 0;
  carrello: any = [];
  idUtente:any // potrei unirlo sotto
  idOrdine: string = ''
  idNomeUtente = ''
  totale: number = 0;
  totaleDaVisualizzare:string='0'
  subtotale: number = 0;
  subtotaleDaVisualizzare:string='0'
  // mosta il messaggio di svuotamento carrello se è true
  svuotaClick:boolean = false
  // serve per comparare con l'id del ristorante corrente
  ristoranteSelezionato = ''
 // nomeristoranteSelezionato = ''
  nomeristoranteSelezionatoDiappoggio = ''
  // quando svuoto il carrello al click di agg prodotto di un altro risto se non segno i
  // costi di consegna in questa var di appoggio allora i costi sono SEMPRE 0€ (SBAGLIATO)
  costiConsegnaAppoggio:number = 0
  // variabile d'appoggio per cancellare un prodotto dal carrello
  filteredCarrello:any
  arrayOrdine:any = []
  arrayOrdineDiAppoggio:any = []
  ordineCorrenteInviato: string = ''

  prodottoModificaUnita:any
 
  
  UtenteLoggato:boolean = false

  // visualizza le tre schermate invio dati: true-false-undefined
  statoOrdineEffettuato: string = ''
  datiOrdineCorrenteInviato: any = []
  ristoranteOrdineCorrenteInviato = ''
  dataOrdineCorrenteInviato = ''
  listaRistoranti: any = []
  listaFiltrataRisto:any = []
  cercaRistorante:string = ''
  OrdiniEffettuati:any 
  // var di appoggio per lista menu
  listaMenu:any

  newarray:any

  prezzoCorrente:any
  prodottoCorrente:any 

  arrayNuovoOrdine :any

  unitaNuova:any

  // mostra i vari ristoranti
  getDatiRistoranti(): Observable<any> {
    return this.http.get(urlRistoranti);
  }

  
  // visualizzazione della lista di ristoranti
  getRistoranti() {
    
    this.ngxService.start()
    this.getDatiRistoranti().subscribe((data) => {
      this.ngxService.stop()
      console.log(data);
      this.listaRistoranti = data;
      this.listaFiltrataRisto = data
      
    });
  }


  // mostra il menu del ristorante scelto
  getMenuRistorante(): Observable<any> {
    return this.http.get(urlMenuRistorante + this.ristoranteSelezionatoOgg.idRistorante);
  }

  // visualizzazione del menu
  getMenu(){
    this.getMenuRistorante().subscribe(data=>{
      this.listaMenu = data
      console.log(this.listaMenu)
      this.listaMenu[0].Ristorante !== undefined
        this.nomeRistorante = this.listaMenu[0].Ristorante;
        console.log(this.nomeRistorante)
      
    })
  }

  // post  ordine
  postOrdine(oggetto:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(urlPostOrdine + this.idUtente, oggetto, { headers });
  }
  
  // post per completamento ordine 
  postDatiOrdine(){  
   if(this.UtenteLoggato === true){
    this.postOrdine(
      this.arrayOrdine
      ).subscribe(data =>{
        this.ordineCorrenteInviato = data.IdOrdine
        this.statoOrdineEffettuato = data.orderAdded
        this.carrello = []
        console.log(data, 'Dati ordine post');
        console.log('Dati ordine post');
        this.ngxService.start()
      })
    this.svuotaCarrello()
    setTimeout(() => {
      this.getDatiOrdineEffettuato()
      this.ngxService.stop()
    }, 1000);
  }
  }
  
  // get dati ordine effettuato
  
  getOrdineEffettuato(): Observable<any> {
    return this.http.get(urlDettaglioOrdineEffettuato +  this.ordineCorrenteInviato); // cercare errore
  }

  getDatiOrdineEffettuato(){
    this.getOrdineEffettuato().subscribe(data=>{
      this.datiOrdineCorrenteInviato = data;
      this.ristoranteOrdineCorrenteInviato = data[0].Ristorante;
      this.dataOrdineCorrenteInviato = data[0].DataOrdine;
      this.OrdiniEffettuati = undefined;
      this.arrayOrdine = [];
      console.log(this.datiOrdineCorrenteInviato, 'ordineinviato' );
    })
  }

  // get lista ordini effettuati
  // mostra il menu del ristorante scelto
  getOrdiniEffettuati(): Observable<any> {
    return this.http.get(urlOrdiniEffettuati + this.idUtente);
  }

  getListaOrdiniEffettuati(){
    this.ngxService.start()
    this.getOrdiniEffettuati().subscribe(data=>{
      this.ngxService.stop()
      this.OrdiniEffettuati = data
      console.log(this.OrdiniEffettuati)
    })
  }


  

  // svuota il carrello quando seleziono il prodotto di un ristorante diverso da quello scelto
  svuotaCarrello() {
    this.carrello = [];
    this.subtotale = 0
    this.totale = 0;
    this.svuotaClick = false
    this.costiConsegna = this.costiConsegnaAppoggio;
    this.ristoranteSelezionato = ''
    //this.nomeristoranteSelezionato = ''
    
  }


  eliminaItem( prezzoProdotto:number, idProdotto:string, unita:number){
    const idToRemove = idProdotto;
    this.filteredCarrello = this.carrello.filter((item:any) => item.idProdotto !== idToRemove);
    this.carrello = this.filteredCarrello
    this.unitaNuova = unita -1
    this.arrayOrdine = this.arrayOrdineDiAppoggio.filter((item:any):any=>{ 
      // elimina unità se il prodotto.unità != 0
      if (item.Unita > 1){
        this.prodottoModificaUnita = this.arrayOrdine.findIndex(((obj:any) => obj.IdProdotto === idProdotto));
        this.arrayOrdine[this.prodottoModificaUnita].Unita = this.unitaNuova
        console.log(this.arrayOrdine, ' ordine Unita ?');
        return  this.arrayOrdine
      }
      else if (item.Unita === 1){
      return  item.IdProdotto !== idToRemove}
     })

    this.arrayOrdineDiAppoggio = this.arrayOrdine
    this.subtotale = this.subtotale - prezzoProdotto
    this.totale = this.totale - prezzoProdotto 
    this.totaleDaVisualizzare = this.totale.toFixed(2)
    this.subtotaleDaVisualizzare = this.subtotale.toFixed(2)   
    if(this.arrayOrdine.length === 0){
      this.costiConsegna = this.costiConsegnaAppoggio
      this.totale = 0
      this.subtotale = 0
      this.subtotaleDaVisualizzare = this.subtotale.toFixed(2)
      this.totaleDaVisualizzare = this.totale.toFixed(2)
    }
    
  }
  

  aggiungiProdotto(prodotto:string, descrizione:string, prezzo:string, idProdotto:string){
     // aggiunge il prodotto nel carrello ( se è il primo ristorante selezionato oppure
     // se sono sul menu del ristorante gia scelto)
  
    if(this.ristoranteSelezionato === this.ristoranteSelezionatoOgg.idRistorante || this.ristoranteSelezionato === '' ){
      this.svuotaClick = false;
      // leva la visualizz di ordine effettuato con successo oppure ops
      this.statoOrdineEffettuato = ''
      this.subtotale += parseFloat(prezzo)
      this.subtotaleDaVisualizzare = this.subtotale.toFixed(2)
      this.carrello.push(
        {prodotto: prodotto, descrizioneProdotto: descrizione, prezzoProdotto: parseFloat(prezzo), idProdotto: idProdotto}
      )
      
      // aggiungi +1 ad unità se il prodotto è gia nel carrello
      this.prodottoModificaUnita = this.arrayOrdine.findIndex(((obj:any) => obj.IdProdotto === idProdotto));
      if(this.prodottoModificaUnita !== -1){
        this.arrayOrdine[this.prodottoModificaUnita].Unita += 1
        console.log(this.arrayOrdine, ' ordine Unita ?');
      }
      else{
        this.arrayOrdine.push(
          {
            Descrizione: descrizione,
            IdProdotto: idProdotto,
            IdRistorante : this.ristoranteSelezionatoOgg.idRistorante,
            P_utente: this.idUtente,
            Prezzo: prezzo,
            Prodotto: prodotto,
            Ristotante: this.ristoranteSelezionatoOgg.nomeRistorante,
            Unita: 1,
          }
        )
      }
      
      
      this.arrayOrdineDiAppoggio = this.arrayOrdine 
      this.calcolatot()
      this.ristoranteSelezionato = this.ristoranteSelezionatoOgg.idRistorante
      console.log(this.arrayOrdine);
      this.prodottoModificaUnita = ''
    }
    else{
      // svuotaclick = true allora compare il messaggio (vuoi scegliere il nuovo risto
      // e così cancellare il carrello)
      this.arrayOrdine = []
      this.svuotaClick = true
      this.subtotale = 0
      this.totale = 0
      this.totaleDaVisualizzare = this.totale.toFixed(2)
      this.subtotaleDaVisualizzare = this.subtotale.toFixed(2)
    }
   
  }

  // calcola il totale del carrello
  calcolatot(){
    this.totale = this.costiConsegna + this.subtotale
    this.totaleDaVisualizzare = this.totale.toFixed(2)
    this.totale = parseFloat(this.totaleDaVisualizzare)
    console.log(this.totale + ' totale giusto ?')
  }
  

  // seleziona il ristorante passando i valori necessari
  selezionaRisto(risto: string, logo: string, tipologia: string, costi:string, tempiConsegna:string, nomeRistorante:string) {
    this.ristoranteSelezionatoOgg = {
      idRistorante : risto,
      nomeRistorante: nomeRistorante,
      logo : logo,
      tipologiaRistorante : tipologia,
      tempiConsegna : tempiConsegna,
      costiConsegna : parseFloat(costi) 
    }
    this.costiConsegnaAppoggio = this.ristoranteSelezionatoOgg.costiConsegna
    this.nomeristoranteSelezionatoDiappoggio = this.ristoranteSelezionatoOgg.nomeRistorante
    console.log(this.ristoranteSelezionato + ' ristoselez')
    console.log(this.ristoranteSelezionatoOgg.idRistorante + ' idristo')
    
  }
  

  // filtra per nome risto
  cerca(risto:string){
    console.log(risto)
    if(!!risto){ //  doppio punto escamativo vuol dire se esite ed è valorizzato
      this.listaFiltrataRisto = this.listaRistoranti.filter((ristoranti:any)=>{
      return ristoranti.Ristorante.toLowerCase()
      .match(risto.trim().toLowerCase());
            
    })
    }
    else{
      this.listaFiltrataRisto = this.listaRistoranti
    }    
  }

  // filtra per tipologia ristorante
  filtraPerTipo(tipo:string){
    this.listaFiltrataRisto = this.listaRistoranti.filter( (ristoranti:any)=>{
      return ristoranti.tipologia.IdTipologia.match(tipo)
    })
  }

  // mostra tutti i ristoranti
  mostraTutti(){
    this.listaFiltrataRisto = this.listaRistoranti
  }
}
