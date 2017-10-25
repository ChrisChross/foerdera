import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { Product } from '../../Model/product';
import { ProductDetailServiceProvider } from '../../providers/product-detail-service/product-detail-service';
/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  selectedProduct: any;
  products: Product[];

onSearchInput($event){

}

  constructor(private ProductService: ProductDetailServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.selectedProduct = navParams.get('name');

    this.products = [];
    for (let i = 1; i < 11; i++) {
      this.products.push({name:"chris"+i,size:40*i,contact:"chris@raubvoegel.de",prize:5*i/2,description:"ich biete Juja",picture:""});
    }
  }


  ionViewDidLoad(){

  }


  productSelected(prod) {

    this.navCtrl.push(ProductDetailPage);
  }



  }
