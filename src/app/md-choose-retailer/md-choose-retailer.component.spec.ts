import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdChooseRetailerComponent } from './md-choose-retailer.component';

describe('MdChooseRetailerComponent', () => {
  let component: MdChooseRetailerComponent;
  let fixture: ComponentFixture<MdChooseRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdChooseRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdChooseRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
