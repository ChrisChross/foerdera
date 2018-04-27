import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ProductDetailServiceProvider } from '../../providers/product-detail-service/product-detail-service';


//import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})



export class ProductDetailPage {

  prods: any;
  data:any = {};
  selectedProduct: any;
  Categorys: Array<{ title: string }>;

   constructor(private ProductService: ProductDetailServiceProvider, public camera:Camera, public navCtrl: NavController, public navParams: NavParams) {

    this.selectedProduct = ProductService.getProduct();
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




  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.selectedProduct.picture = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

  takePhoto(){
    this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
       this.selectedProduct.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
       console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  changeProduct(){
    if(this.selectedProduct!=null){
      this.ProductService.setProudct(this.selectedProduct);
    }
    this.navCtrl.pop();
  }

}
