import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  user: any = {};
  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.user = this.storage.getItem('user');
    if (this.user) {
      this.isLogged = true;
    }
  }
  
}
