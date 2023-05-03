import { Component } from '@angular/core';
import { ErrorService } from '../service/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  mess: string[] = []
  constructor(private erroeService: ErrorService){ 
    this.mess = erroeService.mes
  }

}
