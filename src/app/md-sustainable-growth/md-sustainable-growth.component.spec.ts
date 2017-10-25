import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSustainableGrowthComponent } from './md-sustainable-growth.component';

describe('MdSustainableGrowthComponent', () => {
  let component: MdSustainableGrowthComponent;
  let fixture: ComponentFixture<MdSustainableGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSustainableGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSustainableGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
