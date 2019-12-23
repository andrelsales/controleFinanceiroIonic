import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { BrMaskModel, BrMaskerIonic3 } from 'brmasker-ionic-3';
import { FormGroup,  } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-gasto-mes',
  templateUrl: 'gasto-mes.html',
})
export class GastoMesPage {



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private brMaskerIonic3: BrMaskerIonic3) {
  
  }

  buckUrl : String = API_CONFIG.bucketBaseUrl;
  categoria_id : String;
  nome_categoria = String;
  data: String = new Date().toISOString();
  data2: Date = new Date();
  valor: number;
  form: FormGroup;

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
}

getDate(datepar){
  var dateParts = datepar.split("-");
  var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  return date;
}

ionViewDidLoad() {
  console.log("data" + this.data);   

    this.categoria_id = this.navParams.get('categoria_id');  
    this.nome_categoria =  this.navParams.get('nome_categoria');
    console.log("this.categoria_id " + this.categoria_id); 
    console.log("this.nome_categoria" + this.nome_categoria);
    console.log(this.navParams);      
}

salvar(){
  console.log("AEEEEE");
  console.log("data: " + this.data); 
  console.log("valor " + this.valor);
  
  
}

}