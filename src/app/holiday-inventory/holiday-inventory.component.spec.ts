import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayInventoryComponent } from './holiday-inventory.component';

describe('HolidayInventoryComponent', () => {
  let component: HolidayInventoryComponent;
  let fixture: ComponentFixture<HolidayInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
