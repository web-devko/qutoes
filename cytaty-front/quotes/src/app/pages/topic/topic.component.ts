import { Topic } from './../../models/topic';
import { Observable } from 'rxjs';
import { HttpGetTopicService } from './../../services/http-get-topic.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  constructor(
    private httpTopic: HttpGetTopicService,
    ) {}

    letterTopic = [ 'A', 'C', 'D', 'I', 'L' ];

  allTopics!: Observable<Topic[]>;

  ngOnInit(): void {
    this.allTopics = this.httpTopic.getAllTopics();
  }

}




