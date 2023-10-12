import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsmallComponent } from './cardsmall.component';

describe('CardsmallComponent', () => {
  let component: CardsmallComponent;
  let fixture: ComponentFixture<CardsmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsmallComponent],
    });
    fixture = TestBed.createComponent(CardsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
