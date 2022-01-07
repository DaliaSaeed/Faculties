import { Component, OnInit } from '@angular/core';
import { AddNewsService } from '@modules/auth/services/add-news.service';

@Component({
  selector: 'sb-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
  News:any[] = []
  isLoaded=false

  constructor(private _auth:AddNewsService) { }

  ngOnInit(): void {
    this._auth.showNews().subscribe(
      (res) => {
        this.News = res.data
      },
      (err) => {console.log(err)},
      () => {this.isLoaded=true}
    )
  }
  deleteProduct(id:any, i:number){
    this._auth.deleteNew({id}).subscribe(
      (res)=>{console.log(res);
      },
      (err)=>{console.log(err);
      },
      ()=>{
        this.News.splice(i, 1)
      }
    )
  }

}
