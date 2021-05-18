import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote-cover',
  templateUrl: './quote-cover.component.html',
  styleUrls: ['./quote-cover.component.scss']
})
export class QuoteCoverComponent implements OnInit {

  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {}
}
