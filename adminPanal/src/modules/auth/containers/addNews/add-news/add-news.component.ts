import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddNewsService } from '@modules/auth/services/add-news.service';

@Component({
  selector: 'sb-add-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  images : any[] = [];
  msg = "";


  news ={
    title: "",
    content:"",
    image : []
  }

  constructor(private _auth:AddNewsService) { }

  ngOnInit(): void {
  }

  selectMultipleImage(event:any){
    if (event.target.files.length > 0) {
      this.news.image = event.target.files ;
    }
  }

  onMultipleSubmit(userData:any){
    if(userData.valid){
      const formData = new FormData();
      for(let img of this.news.image){
        formData.append('files', img);
      }
      formData.append('title', this.news.title)
      formData.append('content', this.news.content)

      this._auth.addNews(formData).subscribe(result=> console.log(result))
      this.msg="News Created"
      userData.resetForm()
  }
  else{
    this.msg="Check Your Form Data"
  }
  }

}
