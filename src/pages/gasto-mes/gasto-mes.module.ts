import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GastoMesPage } from './gasto-mes';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    GastoMesPage,
  ],
  imports: [
    IonicPageModule.forChild(GastoMesPage),
    BrMaskerModule
  ],
})
export class GastoMesPageModule {}
