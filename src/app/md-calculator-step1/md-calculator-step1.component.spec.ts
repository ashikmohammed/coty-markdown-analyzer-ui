import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCalculatorStep1Component } from './md-calculator-step1.component';

describe('MdCalculatorStep1Component', () => {
  let component: MdCalculatorStep1Component;
  let fixture: ComponentFixture<MdCalculatorStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdCalculatorStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdCalculatorStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
