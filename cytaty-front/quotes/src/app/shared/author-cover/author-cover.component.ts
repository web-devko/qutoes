import { Author } from './../../models/author';
import { Observable } from 'rxjs';
import { HttpGetAuthorService } from './../../services/http-get-author.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-cover',
  templateUrl: './author-cover.component.html',
  styleUrls: ['./author-cover.component.scss']
})
export class AuthorCoverComponent implements OnInit {

  constructor(
    private httpAuthor: HttpGetAuthorService,
  ) { }

  @Input() param!: string;

  authors!: Observable<Author[]>;


  ngOnInit(): void {
    this.authors = this.httpAuthor.getAuthorAfterLetter(this.param);
  }

}
