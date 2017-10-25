import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { HTTP } from '@ionic-native/http';
import { Product } from '../../Model/product';


/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductDetailServiceProvider {

data: any = {};

//private baseUrl : string = "https://subble.de/load.php"; https://randomuser.me/api/?results=10

  constructor(private http: Http, public product:Product) {
  }


  getMessages() {

    return new Promise (resolve => {
      this.http.get('https://conntectc.de/user_Data/userRegister.php')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.data = data.results;
       resolve(this.data);
      })
    })
    }

    // return this.http.get(this.baseUrl)
    // .map(data => { console.log(data);})

    // return this.http.post(this.baseUrl,JSON.stringify(body),{headers: headers})
    // .map(this.extractData)
    // .subscribe(data => {console.log(data)});


  // public userSettings(name:string, password:string){
  //
  //  var headers = new Headers();
  //  headers.append("Accept", 'application/json');
  //  headers.append('Content-Type', 'application/json' );
  //  let options = new RequestOptions({ headers: headers });
  //  let body = JSON.stringify({
  //  			email: name,
  //  			password: password
  //  		});
  //
  //   return new Promise(resolve => { let url = this.baseUrl + "?email=" + name + "&password=" + password;
  //     this.http.post(url,body,options).subscribe(data=>{
  //       console.log(data);
  //       resolve(data.json());
  //     });
  //   });
  //
	// }

  getStuff(): Product {
    this.product = [{name:"chris",size:40,contact:"chris@raubvoegel.de",prize:5,category: "Juja", description:"ich biete Juja",picture:""}];
    return this.product;
  }

}
