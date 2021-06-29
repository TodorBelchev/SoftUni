import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  constructor(
    private themeService: ThemesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.themeService.createTheme(this.form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/themes');
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
}
