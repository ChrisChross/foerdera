import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { TermineProvider } from '../../providers/termine/termine';


/**
 * Generated class for the HomeTerminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-termine',
  templateUrl: 'home-termine.html',
})

export class HomeTerminePage {

termin: any;

  constructor(public terminService: TermineProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.termin = terminService.getTermin();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTerminePage');
  }

}
