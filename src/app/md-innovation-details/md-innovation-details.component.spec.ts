import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInnovationDetailsComponent } from './md-innovation-details.component';

describe('MdInnovationDetailsComponent', () => {
  let component: MdInnovationDetailsComponent;
  let fixture: ComponentFixture<MdInnovationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdInnovationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdInnovationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
