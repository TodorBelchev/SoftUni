import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {

  transform(value: string): string {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerMonth * 365;

    const valueDate = new Date(value);
    const current = new Date();
    const elapsed = +current - +valueDate;

    const rtf = new Intl.DateTimeFormat('en');

    if (elapsed < msPerMinute) {
      return Math.floor(elapsed / 1000) + ' seconds';
    }
    if (elapsed < msPerHour) {
      return Math.floor(elapsed / msPerMinute) + ' minutes';
    }
    if (elapsed < msPerDay) {
      return Math.floor(elapsed / msPerHour) + ' hours';
    }
    if (elapsed < msPerMonth) {
      return Math.floor(elapsed / msPerDay) + ' days';
    }
    if (elapsed < msPerYear) {
      return Math.floor(elapsed / msPerMonth) + ' months';
    }
    return Math.floor(elapsed / msPerYear) + ' years';

  }

}
