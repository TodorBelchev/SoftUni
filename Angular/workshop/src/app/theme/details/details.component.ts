import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { StorageService } from 'src/app/services/storage.service';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  theme: any;
  id: string;
  username: string;
  get isLogged(): boolean {
    return this.storage.getItem('user') !== null;
  }

  constructor(
    private storage: StorageService,
    private themeService: ThemesService,
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
    this.theme = {};
    this.id = '';
    this.username = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.username = this.storage.getItem('user').username;
      this.themeService.getById(this.id).subscribe(data => this.theme = data);
    })
  }

  onSubmit(): void {
    this.postService.createPost(this.id, this.form.value).subscribe({
      next: () => {
        this.themeService.getById(this.id).subscribe(data => this.theme = data);
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

}
