import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private emailComposer: EmailComposer, public navCtrl: NavController) {

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
