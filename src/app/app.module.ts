import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TipoGastoService } from '../services/domain/tipoGasto.service';
import { ErrorInterceptorProvider } from '../interceptors/erro.interceptor';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,  
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TipoGastoService,
    ErrorInterceptorProvider,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
