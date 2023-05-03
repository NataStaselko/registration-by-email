import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit{
path: any
text: string = ''

  constructor(private router: Router){
    this.path = router.routerState.snapshot.url
  }

  ngOnInit(): void {
    if(this.path == '/'){
      this.text = 'Hello! This is a demo application! Sign in for the content!'
    }else{
      this.text = 'Thank you for registering. Please check your email!'
    }
  }
}
