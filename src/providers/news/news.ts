import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { News } from '../../Model/news';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  news: News[];
  baseUrl: string = 'https://conntectc.de/user_Data/';

  constructor(public stuff:News, public http: Http) {
    this.news = [];
  }

  public getNew():News{
      return this.stuff;
  }

  public setNew(ne){
    this.stuff = ne;
  }

 public getNews(): Promise<News[]>{

    return new Promise (resolve =>{
      this.http.get(this.baseUrl + 'news.php')
      .map(res => res.json())
      .subscribe( data => {
        this.news = data;
        resolve(this.news); }, error => { console.log("Oooops2!");
      })
    });

  }


  public deleteNews(){

  }

}
