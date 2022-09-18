import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabellaComponent } from './tabella/tabella.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [


    TabellaComponent
  ],
  exports: [
    TabellaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class FeaturesModule { }
