import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConfigPage } from '../pages/config/config';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductNewPage } from '../pages/product-new/product-new';
import { ContactInfoPage } from '../pages/contact-info/contact-info';
import { NutzungPage } from '../pages/nutzung/nutzung';
import { LicencePage } from '../pages/licence/licence';
import { HomeNewsPage } from '../pages/home-news/home-news';
import { HomeTerminePage } from '../pages/home-termine/home-termine';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FocusNextDirective } from '../pages/FocusNextDirective';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { ProductDetailServiceProvider } from '../providers/product-detail-service/product-detail-service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Product } from '..//Model/product';
import { News } from '..//Model/news';
import { Termin } from '..//Model/termin';
import { NewsProvider } from '../providers/news/news';
import { TermineProvider } from '../providers/termine/termine';


@NgModule({
  declarations: [
    MyApp,
    ConfigPage,
    ContactPage,
    HomePage,
    ShopPage,
    ProductDetailPage,
    ProductNewPage,
    ContactInfoPage,
    NutzungPage,
    LicencePage,
    HomeNewsPage,
    HomeTerminePage,
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
    ProductNewPage,
    ContactInfoPage,
    NutzungPage,
    LicencePage,
    HomeNewsPage,
    HomeTerminePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ProductDetailServiceProvider,
    Product,
    News,
    Termin,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    TermineProvider,
  ]
})
export class AppModule {}
