import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDay().toString();
    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    return `${year}-${day.padStart(2, '0')}-${month.padStart(2, '0')} ${hour.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }

}
