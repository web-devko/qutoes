import { Observable } from 'rxjs';
import { HttpGetTopicService } from './../../services/http-get-topic.service';
import { Topic } from './../../models/topic';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-and-author-cover',
  templateUrl: './topic-and-author-cover.component.html',
  styleUrls: ['./topic-and-author-cover.component.scss']
})
export class TopicAndAuthorCoverComponent implements OnInit {
  constructor(
    private httpTopic: HttpGetTopicService
  ) { }

  @Input() param!: string;

  topics!: Observable<Topic[]>;


  ngOnInit(): void {
    this.topics = this.httpTopic.getTopicsAfterLetter(this.param);
  }

}
