import { Observable } from 'rxjs';
import { HttpGetQuoteService } from 'src/app/services/http-get-quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-in-advanced-search',
  templateUrl: './quote-in-advanced-search.component.html',
  styleUrls: ['./quote-in-advanced-search.component.scss']
})
export class QuoteInAdvancedSearchComponent implements OnInit {

  constructor(
    private http: HttpGetQuoteService,
    private route: ActivatedRoute,
    ) { }

    quotes!: Observable<Quote[]>;

  ngOnInit(): void {
    const author = this.route.snapshot.paramMap.get('author');
    const topic = this.route.snapshot.paramMap.get('topic');
    const year = this.route.snapshot.paramMap.get('year');
    this.quotes = this.http.getAdvancedSearch(author, topic, year);
  }

}
