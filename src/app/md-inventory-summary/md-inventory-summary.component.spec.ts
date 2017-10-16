import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInventorySummaryComponent } from './md-inventory-summary.component';

describe('MdInventorySummaryComponent', () => {
  let component: MdInventorySummaryComponent;
  let fixture: ComponentFixture<MdInventorySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdInventorySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdInventorySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
