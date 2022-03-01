import { EventService } from '../../services/events/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../interface/events/event';
import { ActivatedRoute } from '@angular/router';
import { ShowNewsService } from 'src/app/services/ShowNews/show-news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css'],
})
export class SingleEventComponent implements OnInit {
  
  apiUrl = environment.Url
  Data:any = []
  id: any
  constructor(private _route:ActivatedRoute, private _global:ShowNewsService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params.id
    // this.id = this._route.snapshot.paramMap.get("id")
    // this._route.paramMap.subscribe(params => this.id = params.get("id"))
    this._global.showMedicineSingleNews(this._route.snapshot.params.id).subscribe(data=>{
      this.Data = data
    })
  }
}
