import { Component, OnInit } from '@angular/core';
import { ShowewsService } from 'src/app/services/ShowNews/showews.service';

@Component({
  selector: 'app-collage-news',
  templateUrl: './collage-news.component.html',
  styleUrls: ['./collage-news.component.css']
})
export class CollageNewsComponent implements OnInit {
  allNews: any= []

  constructor(private _global:ShowewsService) { }

  ngOnInit(): void {
    this._global.getNewsData().subscribe(data=>{
      console.log(data)
      this.allNews = data
      
    })
  }

}
