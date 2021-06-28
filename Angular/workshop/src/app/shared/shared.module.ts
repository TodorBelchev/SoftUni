import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent
  ]
})
export class SharedModule { }
