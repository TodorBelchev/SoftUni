
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  faLock = faLock;
  constructor(
    private userService: UserService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.form.value).subscribe({
      next: (res) => {
        this.storage.setItem('user', res);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
}