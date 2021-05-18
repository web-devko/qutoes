import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInTopicComponent } from './quote-in-topic.component';

describe('QuoteInTopicComponent', () => {
  let component: QuoteInTopicComponent;
  let fixture: ComponentFixture<QuoteInTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
