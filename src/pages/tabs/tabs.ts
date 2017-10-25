import { Component } from '@angular/core';

import { ConfigPage } from '../config/config';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop'
import { ViewChild } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

@ViewChild('tabs') tabRef: TabsPage;

  tab1Root = HomePage;
  tab2Root = ShopPage;
  tab3Root = ContactPage;
  tab4Root = ConfigPage;

  constructor() {

  }
}
