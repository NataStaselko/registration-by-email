import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registr } from '../interface/registr';
import { VerToken } from '../interface/ver-token';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registration(request: Registr){
    return this.http.post('http://localhost:8080/registration', request);
  }

  confirmEmail(request: VerToken, userId: number){
    const params = new HttpParams()
    .set('userId', userId)
    return this.http.post('http://localhost:8080/confirm_email', request, {params});
  }
}
