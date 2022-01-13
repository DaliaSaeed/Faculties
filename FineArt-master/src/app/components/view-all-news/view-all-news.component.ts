import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { ShowewsService } from 'src/app/services/ShowNews/showews.service';
import { environment } from 'src/environments/environment';
import { Event } from '../../interface/events/event';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css'],
})
export class ViewAllNewsComponent implements OnInit {
  allNews: any =[]
  apiUrl = environment.Url

  constructor(private _global: ShowewsService) {
  }

  items: Array<any>;
  ngOnInit(): void {
    this._global.getNewsData().subscribe(data=>{
      console.log(data)
      this.allNews = data
    })
    
  }

  
}
