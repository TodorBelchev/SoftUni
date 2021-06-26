import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faUser = faUser;
  faPhone = faPhone;
  faLock = faLock;
  constructor() { }

  ngOnInit(): void {
  }

}
