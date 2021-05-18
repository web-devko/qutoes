import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInSearchComponent } from './quote-in-search.component';

describe('QuoteInSearchComponent', () => {
  let component: QuoteInSearchComponent;
  let fixture: ComponentFixture<QuoteInSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
