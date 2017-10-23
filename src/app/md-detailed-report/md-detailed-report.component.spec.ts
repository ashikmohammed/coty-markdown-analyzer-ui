import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDetailedReportComponent } from './md-detailed-report.component';

describe('MdDetailedReportComponent', () => {
  let component: MdDetailedReportComponent;
  let fixture: ComponentFixture<MdDetailedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDetailedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDetailedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
