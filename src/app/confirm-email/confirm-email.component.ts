import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit{
userId: any
token: any

  constructor(private router: Router, private reg: RegistrationService){
    this.userId = router.routerState.snapshot.root.queryParams['i']
    this.token = router.routerState.snapshot.root.queryParams['ac']

  }
  ngOnInit(): void {
    this.reg.confirmEmail({token: this.token}, this.userId).subscribe({
      next: ()=>{
        this.router.navigate(['/login'])  
      }
    }) 
  }

}
