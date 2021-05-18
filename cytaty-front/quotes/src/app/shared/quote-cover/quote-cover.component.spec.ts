import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCoverComponent } from './quote-cover.component';

describe('QuoteCoverComponent', () => {
  let component: QuoteCoverComponent;
  let fixture: ComponentFixture<QuoteCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
