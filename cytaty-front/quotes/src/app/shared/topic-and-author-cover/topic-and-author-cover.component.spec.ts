import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAndAuthorCoverComponent } from './topic-and-author-cover.component';

describe('TopicAndAuthorCoverComponent', () => {
  let component: TopicAndAuthorCoverComponent;
  let fixture: ComponentFixture<TopicAndAuthorCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicAndAuthorCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAndAuthorCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
