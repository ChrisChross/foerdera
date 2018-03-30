import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailServiceProvider } from '../../providers/product-detail-service/product-detail-service';
import { Camera } from '@ionic-native/camera';
import { Product } from '../../Model/product';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ProductNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-new',
  templateUrl: 'product-new.html',
})
export class ProductNewPage {

newProduct: Product;
prods:any;
data: any;
Categorys: Array<{ title: string }>;

  constructor(public loadingController:LoadingController, private ProductService: ProductDetailServiceProvider, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {

    this.newProduct = [];
    this.Categorys = [
      {title:'JuJa'},
      {title:'Troja'},
      {title:'Hemd'},
      {title:'T-Shirts'},
      {title:'kurze Hose'},
      {title:'lange Hose'},
      {title:'Abzeichen'},
      {title:'Rucksack und Zubehör'},
      {title:'Sonstiges'}
    ];

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductNewPage');
  }


  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL,
     targetWidth: 300,
     targetHeight: 300
    }).then((imageData) => {
      this.newProduct.picture = 'data:image/jpeg;base64,'+imageData;
      console.log(this.newProduct.picture);
     }, (err) => {
      console.log(err);
    });
  }

  takePhoto(){
    this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 300,
    targetHeight: 300
    }).then((imageData) => {
       this.newProduct.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
       console.log(err);
    });
  }


  AddProduct(){

    let loading = this.loadingController.create({content : "Logging in ,please wait..."});
    loading.present();
    this.newProduct.productOwner = 1;

    this.ProductService.AddProduct(this.newProduct).then(() => { loading.dismiss(); });
    this.navCtrl.pop();
  }


}
