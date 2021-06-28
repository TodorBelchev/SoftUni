import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent implements OnInit, AfterContentChecked {
  @Input() theme: any;
  isSub: boolean;
  constructor(
    private storage: StorageService
  ) {
    this.isSub = false
  }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(): void {
    this.isSub = this.theme.subscribers.includes(this.storage.getItem('user')._id);
  }

}