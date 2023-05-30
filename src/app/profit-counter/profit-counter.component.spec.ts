import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitCounterComponent } from './profit-counter.component';

describe('ProfitCounterComponent', () => {
  let component: ProfitCounterComponent;
  let fixture: ComponentFixture<ProfitCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitCounterComponent]
    });
    fixture = TestBed.createComponent(ProfitCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
