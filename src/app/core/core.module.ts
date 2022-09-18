import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {FeaturesModule} from "../features/features.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule

  ]
})
export class CoreModule { }
