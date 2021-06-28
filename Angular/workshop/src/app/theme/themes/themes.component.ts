import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  constructor(
    private storage: StorageService
  ) { }

  get isLogged(): boolean {
    return this.storage.getItem('user') != null;
  }

  ngOnInit(): void {
  }

}
