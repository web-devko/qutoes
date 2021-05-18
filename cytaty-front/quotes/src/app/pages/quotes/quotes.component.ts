import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/quote';
import { HttpGetQuoteService } from 'src/app/services/http-get-quote.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes!: Observable<Quote[]>;
  pageNumber!: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpGetQuoteService,
  ) { }

  ngOnInit(): void {
    this.quotes = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getQuotes(params.get('id')))
    );
  }


}
