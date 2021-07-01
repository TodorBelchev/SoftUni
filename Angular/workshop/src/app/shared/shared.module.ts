import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ShortenTextPipe } from './shorten-text.pipe';
import { TimeDiffPipe } from './time-diff.pipe';



@NgModule({
  declarations: [
    AsideComponent,
    ShortenTextPipe,
    TimeDiffPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent,
    ShortenTextPipe,
    TimeDiffPipe
  ]
})
export class SharedModule { }
