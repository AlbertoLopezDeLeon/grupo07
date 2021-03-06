import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import { LoginPage } from '../pages/login/login';
import { AdministradorPage } from '../pages/administrador/administrador';
import { RepartidorPage } from '../pages/repartidor/repartidor';
import { RepartidorDetalladoPage } from '../pages/repartidor-detallado/repartidor-detallado';
import { RealizarEntregaPage } from '../pages/realizar-entrega/realizar-entrega';
import { IncidenciaPage } from '../pages/incidencia/incidencia';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const fireBaseConfig={
	apiKey: "AIzaSyBXob8b0-5eDc91Jin42BWUshb7wDP76HM",
	authDomain: "routingdeal.firebaseapp.com",
	databaseURL: "https://routingdeal.firebaseio.com",
	projectId: "routingdeal",
	storageBucket: "routingdeal.appspot.com",
	messagingSenderId: "563600903323"
};

@NgModule({
  declarations: [
    MyApp,
	LoginPage,
	AdministradorPage,
	RepartidorPage,
	RepartidorDetalladoPage,
	RealizarEntregaPage,
	IncidenciaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(fireBaseConfig),
	AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
	AdministradorPage,
	RepartidorPage,
	RepartidorDetalladoPage,
	RealizarEntregaPage,
	IncidenciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	FirebaseDbProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}


