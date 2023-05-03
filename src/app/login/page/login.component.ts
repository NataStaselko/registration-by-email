import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  

  constructor(private loginService: LoginService, 
    private router: Router, private userService: UserService){}

  submit(log: Login){ 
    this.loginService.signUp(log).subscribe({
      next: (res: any)=>{
        sessionStorage.setItem('token', res.token) 
        this.userService.user.next(res.login)       
        this.router.navigate(['/content'])
      }
    })
  }
}
