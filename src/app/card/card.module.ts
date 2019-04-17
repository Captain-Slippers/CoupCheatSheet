import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initNgModule } from '@angular/core/src/view/ng_module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CardModule {
  cardModuleTitle : String
  cardModuleCategory: String
  cardArray: Array<String>

  assestLocation = '../../assets/images/'

  assignArray(){
    for (let index = 0; index < 5; index++) {


    }
  }
}
