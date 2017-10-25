import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInnovationSummaryComponent } from './md-innovation-summary.component';

describe('MdInnovationSummaryComponent', () => {
  let component: MdInnovationSummaryComponent;
  let fixture: ComponentFixture<MdInnovationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdInnovationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdInnovationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
