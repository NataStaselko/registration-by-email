import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private router: Router, private errorService: ErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = sessionStorage.getItem('token') 
      if(token){
        const reqClone = req.clone({
          setHeaders:{
              'Authorization': `Bearer ${token}`
          },
      })
      return next.handle(reqClone)
      } 
      return next.handle(req).pipe(
        catchError((err) =>{
            if (err.error instanceof ErrorEvent) {
                this.router.navigate([''])
            }
            return throwError(()=>{this.errorService.handleError(err)})
        })) 
  }
}
