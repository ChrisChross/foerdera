import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../Model/product';
import { ProductDetailServiceProvider } from '../../providers/product-detail-service/product-detail-service';
import { Camera } from '@ionic-native/camera';

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

base64Image: any;
newProduct: Product;


  constructor(private ProductService: ProductDetailServiceProvider, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.newProduct = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductNewPage');
  }


  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
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
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
       console.log(err);
    });
  }

  AddProduct(){
    this.ProductService.AddProduct(this.newProduct);
    this.navCtrl.pop();

  }

}
