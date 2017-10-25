import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdToplineSummaryComponent } from './md-topline-summary.component';

describe('MdToplineSummaryComponent', () => {
  let component: MdToplineSummaryComponent;
  let fixture: ComponentFixture<MdToplineSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdToplineSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdToplineSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
