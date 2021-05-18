import { Author } from './../../models/author';
import { Observable } from 'rxjs';
import { HttpGetAuthorService } from './../../services/http-get-author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(
    private httpAuthor: HttpGetAuthorService,
    ) {}

  letterTopic = [ 'B', 'D', 'E', 'T' ];

  allAuthors!: Observable<Author[]>;

  ngOnInit(): void {
    this.allAuthors = this.httpAuthor.getAllAuthors();
  }
}
