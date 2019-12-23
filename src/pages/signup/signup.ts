import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/domain/cliente.service';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public clientService: ClienteService,
    public alertController: AlertController) {

 
        this.formGroup = this.formBuilder.group({
          nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
          email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
          tipo : ['1', [Validators.required]],
          cpfOuCnpj : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
          senha : ['123', [Validators.required]],
          // logradouro : ['Rua Via', [Validators.required]],
          // numero : ['25', [Validators.required]],
          // complemento : ['Apto 3', []],
          // bairro : ['Copacabana', []],
          // cep : ['10828333', [Validators.required]],
          // telefone1 : ['977261827', [Validators.required]],
          // telefone2 : ['', []],
          // telefone3 : ['', []],
          // estadoId : [null, [Validators.required]],
          // cidadeId : [null, [Validators.required]]      
    });
     
  }

  ionViewDidLoad() {
    console.log('PASSOU SignupPage');
    console.log('ionViewDidLoad SignupPage');
  }
  signUpUser(){
    console.log(this.formGroup.value);
    this.clientService.insert(this.formGroup.value)
      .subscribe(r => {
        this.showInsertOk();
      },
      error => {}
      );
 
  }
  showInsertOk() {
    let alert = this.alertController.create({
    title: "",
    message: "cadastrado com sucesso",
    enableBackdropDismiss: false,
    buttons: [
      {
        text: "ok",
        handler: () => {
          this.navCtrl.pop;
        }
      }
    ]
    });
    alert.present();
  }
}
