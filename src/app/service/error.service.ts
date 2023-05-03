import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler{
  mes: string[] = []

  constructor(private router: Router) { }

  handleError(error: HttpErrorResponse): void {
    switch(error?.status){

      case 401:{
      this.mes = []
      this.mes.push('Account not found! Please make sure you are using a correct login or password! If you are sure of this, then you may not have confirmed your email. Check your email!')      
      this.router.navigate(['/error'])
      break;
      }

      case 403:{
      this.mes = []
      this.mes.push('Account not found! Please make sure you are using a correct login or password! If you are sure of this, then you may not have confirmed your email. Check your email!')      
      this.router.navigate(['/error'])
      break;
      }

      case 417:{
        this.mes = []
        this.mes.push(error.error.message)
        this.router.navigate(['/error'])
        break;
        }   

      case 404:{this.router.navigate(['**'])}
      break;

      case 400:
        {this.mes = []
          for(let i = 0; i < error.error.length; i++){
            this.mes.push(error.error[i].message)
          }          
          this.router.navigate(['/error'])  
          break; 
            
        }
      case 500:{
        this.mes = []
        this.mes.push('Server Error!')
        this.router.navigate(['/error'])
        break;
      }
}   
}
}

