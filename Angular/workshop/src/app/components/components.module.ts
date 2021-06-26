import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainSectionComponent } from './main-section/main-section.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { ThemesComponent } from './themes/themes.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';



@NgModule({
  declarations: [
    MainSectionComponent,
    HomeComponent,
    AsideComponent,
    ThemesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
