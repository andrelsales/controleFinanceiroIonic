import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';

//import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(
    public platform: Platform,
     public statusBar: StatusBar, 
     public splashScreen: SplashScreen,
     public authService: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: 'HomePage' },
      // { title: 'List', component: ListPage }
      { title: 'Profiles', component: 'ProfilePage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'LogOut', component: '' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title:String, component:Component}) {
  switch(page.title)
  {
    case "LogOut":
    this.authService.logout();
    this.nav.setRoot("HomePage");
    break;

    default:
        this.nav.setRoot(page.component);
  }

    
  }
}
