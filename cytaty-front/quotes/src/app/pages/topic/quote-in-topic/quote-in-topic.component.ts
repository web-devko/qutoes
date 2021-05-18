import { Observable } from 'rxjs';
import { HttpGetQuoteService } from './../../../services/http-get-quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-in-topic',
  templateUrl: './quote-in-topic.component.html',
  styleUrls: ['./quote-in-topic.component.scss']
})
export class QuoteInTopicComponent implements OnInit {
  topic!: string | null;
  quotes!: Observable<Quote[]>;

  constructor(
    private http: HttpGetQuoteService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.topic = this.route.snapshot.paramMap.get('topic');
    this.quotes = this.http.getQuotesFromTopic(this.topic);
  }
}
