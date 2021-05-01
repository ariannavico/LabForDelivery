import { Injectable } from '@angular/core';
import { SharedService } from './sharedService';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

const urlLogin: string =
  'http://l4com.labforweb.it/backend/web/test/ws/users/checkUser.php';
const urlRegistrazione: string =
  'http://l4com.labforweb.it/backend/web/test/ws/users/addUser.php';
const urlGetIdUtente: string =
  'http://l4com.labforweb.it/backend/web/index.php?r=utenti/profile&id_usr=';


@Injectable({
    providedIn: 'root',
  })
  export class SharedServiceForm {
    constructor(public sharedService : SharedService, private http: HttpClient, private route:Router,  public ngxService: NgxUiLoaderService) {}
    

  /* HEADER*/

  badgeInvisible (){
    if(this.sharedService.carrello.length == 0){
    return true
    }
    else{
      return false
    }
  }


  /* FORM */
    

// variabili per cambio di form (login-registrazione-recupera password)
  hide = true;
  usernameLogin = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  emailNuovo = new FormControl('', [Validators.required, Validators.email]);
  nominativo = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  passwordNuovo1 = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordNuovo2 = new FormControl('', [Validators.required, Validators.minLength(8)]);
  emailRicorda1 = new FormControl('', [Validators.required, Validators.email]);
  emailRicorda2 = new FormControl('', [Validators.required, Validators.email]);
  
  userEmail:string = ''
  userPassword:string = ''
  datiLogingRicevuti:any = {}
  utenteRegistrato:any 
  
  
  cancellaMessaggioLoginStato() {
    this.datiLogingRicevuti= {}
  }
  
  

  // error message per email se non inserisco caratteri propri delle email
  getErrorMessage() {
    if (this.emailNuovo.hasError('required')) {
      return 'Obligatorio inserire un valore';
    }
    return this.emailNuovo.hasError('email') ? 'Email non valida' : '';
  }

 

  // disabilita il pulsante registrati
  disabledRegistrati(){
    if(this.emailNuovo.value == undefined || this.emailNuovo.value == '' ||
    this.username.value == undefined || this.username.value == '' ||
    this.nominativo.value == undefined || this.nominativo.value == '' ||
    this.passwordNuovo1.value == undefined || this.passwordNuovo1.value == '' || this.passwordNuovo1.invalid ||
    this.passwordNuovo2.value == undefined || this.passwordNuovo2.value == ''||  this.passwordNuovo2.invalid ||
    this.passwordNuovo1.value !== this.passwordNuovo2.value
      ){
        return true
      }
      else{
        return false
      }
  }

    // disabilita il pulsante ricorda password
  disabledRicorda(){
    if(this.emailRicorda1.value == undefined || this.emailRicorda1.value == '' ||
    this.emailRicorda2.value == undefined || this.emailRicorda2.value == '' ||
    this.emailRicorda1.value !== this.emailRicorda2.value ){
      return true
    }
    else{
      return false
    }
  }

// disabilita il pulsante login
  disabledLogin(){
    if(this.usernameLogin.value == undefined || this.usernameLogin.value == '' ||
    this.password.value == undefined || this.password.value == '' ||
    this.password.invalid){
      return true
    }else{
      return false
    }
  }
 
  // quando faccio il login
  postUserLogin(oggetto: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(urlLogin, oggetto, { headers });
  }

  
  postDatiLogin(e:any){  
    e.preventDefault()  
    this.postUserLogin({
      "username": this.usernameLogin.value,
      "password": this.password.value}).subscribe(data =>{
        this.datiLogingRicevuti = data
        console.log(data, 'Dati login')
        this.usernameLogin.setValue('')
        this.password.setValue('')
        this.sharedService.idUtente = this.datiLogingRicevuti.IdUtente
        console.log(this.sharedService.idUtente, ' dati id utente'); 
         this.utenteRegistrato = ''
        this.getDatiLogin()
        this.sharedService.UtenteLoggato = true
      })
  }

  // va sul log quando mi registro correttamente
	goLogin(){
    this.ngxService.start();
		this.route.navigate(['/login']); // navigate to other page
    this.ngxService.stop()
	}
  // va sui ristoranti quando mi registro correttamente
	goRistoranti(){
		this.route.navigate(['/ristoranti']); // navigate to other page
    
	}
  
   // quando faccio la registrazione
   postUserRegistrazione(oggetto: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(urlRegistrazione, oggetto, { headers });
  }

  postDatiRegistrazione(e:any){  
    //e.preventDefault()
    this.postUserRegistrazione({
      "email": this.emailNuovo.value,
      "nominativo": this.nominativo.value, 
      "password": this.passwordNuovo1.value,
      "username": this.username.value}).subscribe(data =>{
        console.log(data, 'Dati registrazione');
        this.utenteRegistrato = data.aggiunto
        this.datiLogingRicevuti.loggedIn = ''
       setTimeout(()=>{
        if(this.utenteRegistrato== true){
          console.log('bauuuuuu')
          this.goLogin()
        }
       }, 500)
        //console.log(this.utenteRegistrato + 'utenteregistrato?');
        this.nominativo.setValue('')
        this.username.setValue('')
        this.emailNuovo.setValue('')
        this.passwordNuovo1.setValue('')
        this.passwordNuovo2.setValue('')
      })
  }


  // conferma della registrazione
  getIdUtente(): Observable<any> {
    return this.http.get(urlGetIdUtente + this.sharedService.idUtente);
  }

  getDatiLogin(){
    this.getIdUtente().subscribe(data=>{
      console.log(data, 'server responce'); 
      this.sharedService.idNomeUtente = data.nominativo
      console.log(this.sharedService.idNomeUtente+ ' nominativo'); 
      setTimeout(()=>{
        if(this.sharedService.idNomeUtente != ''){
          console.log('bauuuuuu')
          this.goRistoranti()
        }
       }, 1000)
  })
  }



  }