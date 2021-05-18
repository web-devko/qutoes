import { Topic } from './../../models/topic';
import { HttpGetTopicService } from './../../services/http-get-topic.service';
import { Author } from './../../models/author';
import { Observable } from 'rxjs';
import { HttpGetAuthorService } from 'src/app/services/http-get-author.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  allAuthors!: Observable<Author[]>;
  allTopics!: Observable<Topic[]>;
  allYears = ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2001', '2002', '2003', '2004'];

  formGroup: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private httpAuthor: HttpGetAuthorService,
    private httpTopic: HttpGetTopicService,
  ) {
    this.formGroup = this.fb.group({
      author: [''],
      topic: [''],
      quote: [''],
      year: [''],
      photo: [null]
    });
  }


   ngOnInit(): void {
    this.allAuthors = this.httpAuthor.getAllAuthors();
    this.allTopics = this.httpTopic.getAllTopics();
  }

  uploadFile(event: any): void {
    // @ts-ignore: Object is possibly 'null'.
    const file = (event.target as HTMLInputElement).files[0];
    this.formGroup.patchValue({
      photo: file
    });
    // @ts-ignore: Object is possibly 'null'.
    this.formGroup.get('photo').updateValueAndValidity();
  }

  submitForm(): void {
    const formData: any = new FormData();
    // @ts-ignore: Object is possibly 'null'.
    formData.append('author', this.formGroup.get('author').value);
    // @ts-ignore: Object is possibly 'null'.
    formData.append('topic', this.formGroup.get('topic').value);
    // @ts-ignore: Object is possibly 'null'.
    formData.append('year', this.formGroup.get('year').value);
    // @ts-ignore: Object is possibly 'null'.
    formData.append('quote', this.formGroup.get('quote').value);
    // @ts-ignore: Object is possibly 'null'.
    formData.append('photo', this.formGroup.get('photo').value);

    this.http.post('http://localhost:3000/quotes/', formData).subscribe(
      (response) => (console.log(response), alert('Udało się dodać cytat'), this.formGroup.reset()),
      (error) => console.log(error)
    );
  }
}
