import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    MainSectionComponent,
    HomeComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
