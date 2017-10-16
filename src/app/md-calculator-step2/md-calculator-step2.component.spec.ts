import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCalculatorStep2Component } from './md-calculator-step2.component';

describe('MdCalculatorStep2Component', () => {
  let component: MdCalculatorStep2Component;
  let fixture: ComponentFixture<MdCalculatorStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdCalculatorStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdCalculatorStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
