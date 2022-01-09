import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { ShowNewsService } from 'src/app/services/showNews/show-news.service';
import { Event } from '../../interface/events/event';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css'],
})
export class ViewAllNewsComponent implements OnInit {
  allNews: any = []

  constructor(private _global:ShowNewsService) {
  }

  ngOnInit(): void {
    this._global.getNewsData().subscribe(data=>{
      console.log(data)
      this.allNews = data
    })
   
  }

 
}
