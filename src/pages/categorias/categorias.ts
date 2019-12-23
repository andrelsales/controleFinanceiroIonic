import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoGastoService } from '../../services/domain/tipoGasto.service';
import { TipoGastoDTO } from '../../models/tipoGasto.dto';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  items: TipoGastoDTO[];

  buckUrl : String = API_CONFIG.bucketBaseUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tipoGastoService: TipoGastoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
     this.tipoGastoService.findAll()
     .subscribe(r => {
      this.items = r.filter(a => Number(a.id) <= 6 );
        //  this.items = r;
     },
     error => {});   

  }

  showGastoMes(categoria_id : string, nome_categoria : string) {
    console.log("showgastomes" +categoria_id + "-" + nome_categoria  );
    
    this.navCtrl.push('GastoMesPage', {categoria_id: categoria_id, nome_categoria: nome_categoria});    
}

}
