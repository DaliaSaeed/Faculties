import { Component, OnInit } from '@angular/core';
import { ShowNewsService } from 'src/app/services/ShowNews/show-news.service';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css'],
})
export class ViewAllNewsComponent implements OnInit {
  allNews: any =[]

  constructor(private _global: ShowNewsService) {
  }

  items: Array<any>;
  ngOnInit(): void {
    this._global.getNewsData().subscribe(data=>{
      console.log(data)
      this.allNews = data
    })
    
  }

  
}
