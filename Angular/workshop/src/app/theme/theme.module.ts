import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemesComponent } from './themes/themes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ThemeItemComponent,
    ThemeListComponent,
    ThemesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ThemeModule { }
