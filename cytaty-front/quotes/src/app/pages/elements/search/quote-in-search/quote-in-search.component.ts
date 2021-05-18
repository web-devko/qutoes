import { HttpGetQuoteService } from './../../../../services/http-get-quote.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-quote-in-search',
  templateUrl: './quote-in-search.component.html',
  styleUrls: ['./quote-in-search.component.scss']
})
export class QuoteInSearchComponent implements OnInit {

  quotes!: Observable<Quote[]>;
  information!: string;

  constructor(private http: HttpGetQuoteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const search = this.route.snapshot.paramMap.get('search');
    this.quotes = this.http.getSearch(search);
    console.log(_.isEmpty(this.quotes));

  }


}
