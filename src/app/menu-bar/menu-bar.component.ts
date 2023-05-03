import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  user : string = ''
  constructor(private userservice: UserService, 
    private login: LoginService, private router: Router){
    userservice.user.subscribe((v) => this.user = v)

  }

  logout(){   
    this.login.logout().subscribe({
      next: ()=>{     
        sessionStorage.removeItem('token')     
        this.userservice.user.next('')  
        this.router.navigate([''])    
      }
    })

  }

}
