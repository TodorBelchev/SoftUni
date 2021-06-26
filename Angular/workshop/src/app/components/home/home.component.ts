import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged: boolean = true;
  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.isLogged = this.storage.getItem('user') !== null;
  }

}
