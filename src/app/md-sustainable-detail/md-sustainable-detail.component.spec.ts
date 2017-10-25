import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSustainableDetailComponent } from './md-sustainable-detail.component';

describe('MdSustainableDetailComponent', () => {
  let component: MdSustainableDetailComponent;
  let fixture: ComponentFixture<MdSustainableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSustainableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSustainableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
