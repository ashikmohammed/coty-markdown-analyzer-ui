import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSelectRetailerComponent } from './md-select-retailer.component';

describe('MdSelectRetailerComponent', () => {
  let component: MdSelectRetailerComponent;
  let fixture: ComponentFixture<MdSelectRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSelectRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSelectRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
