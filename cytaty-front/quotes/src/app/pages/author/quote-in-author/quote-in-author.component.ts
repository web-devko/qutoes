import { HttpGetQuoteService } from 'src/app/services/http-get-quote.service';
import { Quote } from 'src/app/models/quote';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-in-author',
  templateUrl: './quote-in-author.component.html',
  styleUrls: ['./quote-in-author.component.scss']
})
export class QuoteInAuthorComponent implements OnInit {

  author!: string | null;
  quotes!: Observable<Quote[]>;

  constructor(
    private http: HttpGetQuoteService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.author = this.route.snapshot.paramMap.get('author');
    this.quotes = this.http.getQuotesFromAuthor(this.author);
  }

}
