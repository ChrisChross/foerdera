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
products: Product[];


//private baseUrl : string = "https://subble.de/load.php"; https://randomuser.me/api/?results=10

  constructor(private http: Http, public product:Product) {
    this.products = [];
    for (let i = 1; i < 3; i++) {
      this.products.push({name:"chris"+i, size:40*i, contact:"chris@raubvoegel.de", prize:5*i/2, category: "Pulli", description:"ich biete Juja", picture:""});
    }
    this.product.name = "";
    this.product.size = 0;
    this.product.contact = "";
    this.product.prize = 0;
    this.product.category = "";
    this.product.description = "";
    this.product.picture = "";
    this.product.productOwner = false;
  }


  public setProudct(product){
    this.product = product;
  }

  public getProduct():Product{
    return this.product;
  }

  public AddProduct(newProduct: Product){
    this.products.push(newProduct);
  }

  public deleteProduct(){

  }

  public getProducts(){
    return this.products;
  }

  public findProduct(product){

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


}
