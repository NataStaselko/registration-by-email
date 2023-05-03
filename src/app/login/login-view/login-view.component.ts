import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/login';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  @Output() login: EventEmitter<Login> = new EventEmitter()

  loginForm: FormGroup
  log!: Login

  constructor(){
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  signIn(){
    if(this.loginForm.valid){
      this.log = { username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value}
      this.login.emit(this.log) 
    }    
  }

}
