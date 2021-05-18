import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInAuthorComponent } from './quote-in-author.component';

describe('QuoteInAuthorComponent', () => {
  let component: QuoteInAuthorComponent;
  let fixture: ComponentFixture<QuoteInAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
