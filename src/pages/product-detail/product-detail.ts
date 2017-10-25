import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ProductDetailServiceProvider } from '../../providers/product-detail-service/product-detail-service';
import { Product } from '../../Model/product';

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
  picData: any;
  base64Image:any;
  base64Image2: any;
  prodname: string = "";
  selectedProduct: any;
  product:Product;



  constructor(private ProductService: ProductDetailServiceProvider, public camera:Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.ProductService.getStuff();
    this.data.prodname = '';
    this.data.size = '';
    this.data.response = '';
    this.getMessages();
  }



  getMessages() {
    this.ProductService.getMessages().then(data => this.prods = data);
    console.log(this.prods);
    //this.ProductService.userSettings(this.data.prodname,this.data.size).then(data=>this.data.response = data);
   }

  getStuff(){
    return this.ProductService.getStuff();
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
       this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
       console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }


}
