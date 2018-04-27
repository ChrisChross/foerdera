import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Termin } from '../../Model/termin';

/*
  Generated class for the TermineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TermineProvider {

  termine: Termin[];
  baseUrl: string = 'https://conntectc.de/user_Data/';

  constructor(public http: Http, public termin: Termin) {
    this.termine = [];
  }

  public getTermin():Termin{
      return this.termin;
  }

  public setTermin(termin){
    this.termin = termin;
  }

  public getTermine(): Promise<Termin[]>{

    return new Promise (resolve =>{
      this.http.get(this.baseUrl + 'termine.php')
      .map(res => res.json())
      .subscribe( data => {
        this.termine = data;
        resolve(this.termine); }, error => { console.log("Oooops2!");
      })
    });

  }



  deleteNews(){

  }

}
