import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registr } from 'src/app/interface/registr';

@Component({
  selector: 'app-reg-view',
  templateUrl: './reg-view.component.html',
  styleUrls: ['./reg-view.component.scss']
})
export class RegViewComponent {
  @Output() registr: EventEmitter<Registr> = new EventEmitter()
  regForm: FormGroup;
  reg: Registr = {login: '', email: '', password: ''}

  constructor(){
    this.regForm = new FormGroup({
      'login': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  submitReg(){
    if(this.regForm.valid){
      this.reg = {login: this.regForm.controls['login'].value,
      email: this.regForm.controls['email'].value,
      password: this.regForm.controls['password'].value}
      this.registr.emit(this.reg)
    }    
  }

}
