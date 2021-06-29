import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { faEnvelope, faUser, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faPhone = faPhone;
  faLock = faLock;
  constructor(
    private userService: UserService,
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      let user = await this.userService.register(this.form.value);
      this.storage.setItem('user', user);
      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error.message);
    }
  }

}