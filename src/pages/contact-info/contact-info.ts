import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-info',
  templateUrl: 'contact-info.html',
})
export class ContactInfoPage {

  constructor(private emailComposer: EmailComposer, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactInfoPage');
  }

  sendMail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
       if(available) {
         //Now we know we can send
       }
    });
    let email = {
     to: 'foerderkreis@raubvoegel.de',
     attachments: [],
     subject: 'Frage bezüglich',
     body: '',
     isHtml: true
   };
   this.emailComposer.open(email);
  }
  
}
