import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConfigPage } from '../pages/config/config';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { ProductDetailPage } from '../pages/product-detail/product-detail'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FocusNextDirective } from '../pages/FocusNextDirective';
import { Camera } from '@ionic-native/camera';
import { ProductDetailServiceProvider } from '../providers/product-detail-service/product-detail-service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Product } from '..//Model/product';


@NgModule({
  declarations: [
    MyApp,
    ConfigPage,
    ContactPage,
    HomePage,
    ShopPage,
    ProductDetailPage,
    TabsPage,
    FocusNextDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfigPage,
    ContactPage,
    HomePage,
    ShopPage,
    ProductDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ProductDetailServiceProvider,
    Product,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
