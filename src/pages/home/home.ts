import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { News } from '../../Model/news';
import { Termin } from '../../Model/termin';
import { NewsProvider } from '../../providers/news/news';
import { TermineProvider } from '../../providers/termine/termine';
import { HomeNewsPage } from '../home-news/home-news'
import { HomeTerminePage } from '../home-termine/home-termine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  prods: any;
  news: News[];
  termine: Termin[];

  constructor(public laodingController:LoadingController, public navCtrl: NavController, public newsProvider:NewsProvider, public terminService:TermineProvider) {

        let loading = this.laodingController.create({content : "Lade Daten, bitte warten..."});
        loading.present();
        this.newsProvider.getNews().then(data => {this.news = data;});
        this.terminService.getTermine().then(data => {this.termine = data;loading.dismiss();});

  }

  ionViewDidLoad(){

  }

  newsSelected(ne){
      this.newsProvider.setNew(ne);
      this.navCtrl.push(HomeNewsPage);
  }

  terminSelected(termin){
    this.terminService.setTermin(termin);
    this.navCtrl.push(HomeTerminePage);
  }

}
