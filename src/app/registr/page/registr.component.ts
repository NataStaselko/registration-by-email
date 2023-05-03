import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registr } from 'src/app/interface/registr';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})
export class RegistrComponent {
  constructor(private registration: RegistrationService, 
    private router: Router){}

  submit(reg: Registr){
    this.registration.registration(reg).subscribe({
      next: () => {
        this.router.navigate(['/inform'])
      }
    })
  }
}
