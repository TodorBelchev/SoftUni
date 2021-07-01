import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ShortenTextPipe } from './shorten-text.pipe';
import { TimeDiffPipe } from './time-diff.pipe';
import { FormatDatePipe } from './format-date.pipe';



@NgModule({
  declarations: [
    AsideComponent,
    ShortenTextPipe,
    TimeDiffPipe,
    FormatDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent,
    ShortenTextPipe,
    TimeDiffPipe,
    FormatDatePipe
  ]
})
export class SharedModule { }
