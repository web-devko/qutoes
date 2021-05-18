import { Author } from './../../../models/author';
import { Topic } from './../../../models/topic';
import { HttpGetTopicService } from './../../../services/http-get-topic.service';
import { HttpGetQuoteService } from 'src/app/services/http-get-quote.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { HttpGetAuthorService } from 'src/app/services/http-get-author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private http: HttpGetQuoteService,
    private httpTopic: HttpGetTopicService,
    private httpAuthor: HttpGetAuthorService,
    private router: Router,
  ) { }

  model: Partial<Quote> = {};
  years!: string[];

  allAuthors!: Observable<Author[]>;
  allTopics!: Observable<Topic[]>;

  text!: string;

  quotes!: Observable<Quote[]>;
  dots = '../assets/dots.svg';
  loupe = '../assets/loupe.svg';
  show = false;


  ngOnInit(): void {
    this.allAuthors = this.httpAuthor.getAllAuthors();
    this.allTopics = this.httpTopic.getAllTopics();
    this.years = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  }

  search(): void {
    this.http.getSearch(this.text);
  }

  redirectTo(uri: string): void{
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
 }
}



