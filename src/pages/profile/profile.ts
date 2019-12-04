import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cliente : ClienteDTO; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    console.log("PROFILE");  

    let localUser = this.storage.getLocalUser();
    console.log(localUser);
    if (localUser && localUser.email ) {
      this.clienteService.findByEmail(localUser.email)
      .subscribe(r => {
        this.cliente = r;
        this.getImageIfExists();
      },
      error => {} 
      )
    }
   
  }

  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
      // this.blobToDataURL(response).then(dataUrl => {
      //   let str : string = dataUrl as string;
      //   this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
      // });
    },
    error => {
      // this.profileImage = 'assets/imgs/avatar-blank.png';
    });
}

}
