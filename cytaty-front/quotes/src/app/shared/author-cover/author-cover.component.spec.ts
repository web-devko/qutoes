import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCoverComponent } from './author-cover.component';

describe('AuthorCoverComponent', () => {
  let component: AuthorCoverComponent;
  let fixture: ComponentFixture<AuthorCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
