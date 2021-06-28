import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themes: any[];
  constructor(
    private themeService: ThemesService
  ) {
    this.themes = [];
  }

  ngOnInit(): void {
    this.themeService.getAll().subscribe(data => {
      this.themes = data as any;
    });
  }

}
