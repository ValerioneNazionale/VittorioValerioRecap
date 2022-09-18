import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottoniComponent } from './bottoni/bottoni.component';




@NgModule({
  declarations: [
    BottoniComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    BottoniComponent,
  ]
})
export class SharedModule {
}
