import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  theme: any;
  get isLogged(): boolean {
    return this.storage.getItem('user') !== null;
  }

  constructor(
    private storage: StorageService,
    private themeService: ThemesService,
    private route: ActivatedRoute
  ) { 
    this.theme = {};
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.themeService.getById(params.id).subscribe(data => this.theme = data);
    })
  }

}
