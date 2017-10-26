import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { ProductNewPage } from '../product-new/product-new';
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

  selectedProduct: Product;
  products: Product[];
  serviceData: any;

onSearchInput($event){

}

  constructor(private ProductService: ProductDetailServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.products = this.ProductService.getProducts();

  }

  ionViewDidLoad(){

  }

  productSelected(prod) {

    this.ProductService.setProudct(prod);
    this.navCtrl.push(ProductDetailPage);
  //  this.navCtrl.push(ProductDetailPage,{selectedProduct: prod});
  }

  createNewProduct(){

    this.navCtrl.push(ProductNewPage);
  }



  }
