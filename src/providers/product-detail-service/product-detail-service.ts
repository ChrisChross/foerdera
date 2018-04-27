import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import { Product } from '../../Model/product';

/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductDetailServiceProvider {

data: number;
foundProducts: string;
products: Product[];
baseUrl: string = 'https://conntectc.de/user_Data/';
dataa:any;
//private baseUrl : string = "https://subble.de/load.php";https://conntectc.de/user_Data/newProduct.php https://randomuser.me/api/?results=10



  constructor( private http: Http, public product:Product) {
    this.products = [];
  }


  public setProudct(product){
    this.product = product;
  }

  public getProduct():Product{
    return this.product;
  }

  public AddProduct(newProduct:Product): Promise<{}> {

    var myData = JSON.stringify({name: newProduct.name, size: newProduct.size, contact: newProduct.contact, prize: newProduct.prize, category: newProduct.category, description: newProduct.description, picture: newProduct.picture, productOwner: newProduct.productOwner });

    return new Promise  (resolve => { this.http.post(this.baseUrl + 'newProduct.php', myData)
      .map(res => res.json())
      .subscribe( data => { this.data = data;
        newProduct.id = this.data;
        this.products.push(newProduct);
         console.log(newProduct.id);
         resolve(this.data); }, error => { console.log("Oooops!");
      })
    });

  }


  public deleteProduct(prod):Promise<Product[]>{
    var myData = JSON.stringify({prodid: prod.id});
    return new Promise (resolve => {this.http.post(this.baseUrl + 'deleteProduct.php', myData)
      .map(res => res.json())
      .subscribe( data => { this.products = data;
      resolve(this.products);}, error => { console.log(error);
      })
    });
  }

  public getProducts(): Promise<Product[]>{
    //return this.products;
    return new Promise (resolve =>{
      this.http.get(this.baseUrl + 'getProducts.php')
      .map(res => res.json())
      .subscribe( data => {
        console.log(data);
        this.products = data;
        resolve(this.products);}, error => { console.log(error);
      })
    });
  }

  public findProducts(name): Promise<Product[]>{
    var myData = JSON.stringify({name: name});
    return new Promise (resolve => {this.http.post(this.baseUrl + 'search.php', myData)
      .map(res => res.json())
      .subscribe( data => { this.products = data;
      resolve(this.products);}, error => { console.log(error);
      })
    });
  }

}
