import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaPrioritizeupcdeleteComponent } from './mda-prioritizeupcdelete.component';

describe('MdaPrioritizeupcdeleteComponent', () => {
  let component: MdaPrioritizeupcdeleteComponent;
  let fixture: ComponentFixture<MdaPrioritizeupcdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdaPrioritizeupcdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdaPrioritizeupcdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
