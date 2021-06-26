import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form!: NgForm;
  faLock = faLock;
  constructor(
    private userService: UserService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  async onSubmit() {
    try {
      let token = await this.userService.login(this.form.value);
      this.storage.setItem('user', token);
      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error.message);
    }
  }
}
