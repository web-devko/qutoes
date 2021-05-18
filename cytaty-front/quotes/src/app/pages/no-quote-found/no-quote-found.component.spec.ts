import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoQuoteFoundComponent } from './no-quote-found.component';

describe('NoQuoteFoundComponent', () => {
  let component: NoQuoteFoundComponent;
  let fixture: ComponentFixture<NoQuoteFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoQuoteFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoQuoteFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
