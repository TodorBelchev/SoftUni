import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemesComponent } from './themes/themes.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    ThemeItemComponent,
    ThemeListComponent,
    ThemesComponent,
    DetailsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule
  ]
})
export class ThemeModule { }
