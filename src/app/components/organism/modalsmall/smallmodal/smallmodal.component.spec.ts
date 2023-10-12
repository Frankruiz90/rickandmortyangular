import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallmodalComponent } from './smallmodal.component';

describe('SmallmodalComponent', () => {
  let component: SmallmodalComponent;
  let fixture: ComponentFixture<SmallmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallmodalComponent],
    });
    fixture = TestBed.createComponent(SmallmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
