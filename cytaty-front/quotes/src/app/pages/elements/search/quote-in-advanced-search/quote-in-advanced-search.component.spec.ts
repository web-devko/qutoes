import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInAdvancedSearchComponent } from './quote-in-advanced-search.component';

describe('QuoteInAdvancedSearchComponent', () => {
  let component: QuoteInAdvancedSearchComponent;
  let fixture: ComponentFixture<QuoteInAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInAdvancedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
