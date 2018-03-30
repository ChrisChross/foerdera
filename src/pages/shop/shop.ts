import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { ProductNewPage } from '../product-new/product-new';
import { Product } from '../../Model/product';
import { ProductDetailServiceProvider } from '../../providers/product-detail-service/product-detail-service';
import { LoadingController } from 'ionic-angular';
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
  searchText: string;


  constructor(public loadingController:LoadingController, private ProductService: ProductDetailServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.searchText = "";
    let loading = this.loadingController.create({content : "Lade Daten, bitte warten..."});
    loading.present();
    this.ProductService.getProducts().then(data => {this.products = data; loading.dismiss();});

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

  delete(prod){
    let loading = this.loadingController.create({content : "Lösche Produkt, bitte warten..."});
    loading.present();
    this.ProductService.deleteProduct(prod).then(data => {this.products = data;loading.dismiss();})
  }

  onSearchInput(){
    this.ProductService.findProducts(this.searchText).then(data => {this.products = data;})
  }


  }
