import { Component, OnInit } from '@angular/core';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  message!: string

  constructor(private content: ContentService){}

  ngOnInit(): void {
    this.content.getContent().subscribe({
      next: (res: any) =>{
        this.message = res.message
      }
    })
  }
}
