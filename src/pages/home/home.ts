import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha : ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService) {

  }

    ionViewWillEnter() {
       this.menu.swipeEnable(false);
    }
    ionViewDidLeave() {
        this.menu.swipeEnable(true);
    }

  login()
  {
    console.log('TENTATIVA DE LOGIN');
    // this.navCtrl.push('CategoriasPage');
    console.log(this.creds);
    this.auth.authenticate(this.creds)
    .subscribe(r => {
      console.log('ABC');
      console.log(r.headers.get('Authorization'));
      this.auth.successfulLogin(r.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');    
    },
    error => {});   
  }
}
