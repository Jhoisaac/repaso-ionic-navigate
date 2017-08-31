import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ScannerPage, TabsPage, ListadoPage, AjustesPage, ProductoPage, ModalPage, PopupPage } from '../pages/index.pages';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HttpModule } from '@angular/http';
import { ListadoProvider } from '../providers/listado/listado';

@NgModule({
  declarations: [
    MyApp,
    ScannerPage,
    ListadoPage,
    TabsPage,
    AjustesPage,
    ProductoPage,
    ModalPage,
    PopupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScannerPage,
    ListadoPage,
    TabsPage,
    AjustesPage,
    ProductoPage,
    ModalPage,
    PopupPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    ListadoProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListadoProvider
  ]
})
export class AppModule {}
