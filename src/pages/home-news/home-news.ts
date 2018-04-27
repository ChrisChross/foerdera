import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewsProvider } from '../../providers/news/news';
//import { News } from '../../Model/news';

/**
 * Generated class for the HomeNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-news',
  templateUrl: 'home-news.html',
})
export class HomeNewsPage {

  new: any;

  constructor(public newsService: NewsProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.new = newsService.getNew();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNewsPage');
  }

}
