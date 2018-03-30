import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactInfoPage } from '../contact-info/contact-info';
import { NutzungPage } from '../nutzung/nutzung';
// import { LicencePage } from '../licence/licence';

@Component({
  selector: 'config-about',
  templateUrl: 'config.html'
})
export class ConfigPage {

  pushContactPage: any;
  pushNutzungPage: any;
  // pushLizensenPage: any;

  constructor(public navCtrl: NavController) {

    this.pushContactPage = ContactInfoPage;
    this.pushNutzungPage = NutzungPage;
    // this.pushLizensenPage = LicencePage;
  }




}
