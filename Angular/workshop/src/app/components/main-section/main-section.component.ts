import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
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
