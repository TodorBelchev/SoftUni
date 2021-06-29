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
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThemeItemComponent,
    ThemeListComponent,
    ThemesComponent,
    DetailsComponent,
    CommentComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule,
    FormsModule
  ]
})
export class ThemeModule { }
