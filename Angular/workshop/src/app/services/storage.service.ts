import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage = localStorage;

  setItem<T>(key: string, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem(key: string): any {
    let item = this.localStorage.getItem(key);
    
    if (typeof item == 'string') {
      item = JSON.parse(item);
    }
    return item;
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}