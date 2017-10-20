import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCalculatorStep3Component } from './md-calculator-step3.component';

describe('MdCalculatorStep3Component', () => {
  let component: MdCalculatorStep3Component;
  let fixture: ComponentFixture<MdCalculatorStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdCalculatorStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdCalculatorStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
