import { EventService } from '../../services/events/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../interface/events/event';
import { ShowewsService } from 'src/app/services/ShowNews/showews.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _route:ActivatedRoute, private _global:ShowewsService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params.id
    // this.id = this._route.snapshot.paramMap.get("id")
    // this._route.paramMap.subscribe(params => this.id = params.get("id"))
    this._global.getFineArtSingleNews(this._route.snapshot.params.id).subscribe(data=>{
      this.Data = data
    })
  }
}
