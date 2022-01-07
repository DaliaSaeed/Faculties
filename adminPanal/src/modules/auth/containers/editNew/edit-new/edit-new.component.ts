import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddNewsService } from '@modules/auth/services/add-news.service';

@Component({
  selector: 'sb-edit-new',
  templateUrl: './edit-new.component.html',
  styleUrls: ['./edit-new.component.scss']
})
export class EditNewComponent implements OnInit {
  editNewForm = new FormGroup ({
    title: new FormControl(),
    content: new FormControl(),
  })
  id: any;

  constructor(public _auth:AddNewsService, public _route:ActivatedRoute, public _router:Router) { }

  ngOnInit(): void {
    this._auth.getSingleNew({id:this._route.snapshot.params['id']}).subscribe(
      (res) => {
        this.editNewForm.patchValue(res.data)
        this.id = res.data._id
      },
      () => {},
      () => {}
    )
  }
  get title() {return this.editNewForm.get('title')}
  get content() {return this.editNewForm.get('content')}

  editNew(){
    this._auth.editNew({id:this.id, ...this.editNewForm.value}).subscribe(
      (res ) => {console.log(res);
      },
      (err) => {console.log(err);
      },
      () => {
        this._router.navigateByUrl('/auth/AllNews')
      }
    )
  }

}

