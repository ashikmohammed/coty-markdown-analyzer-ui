import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdPrioritizeupcdeleteComponent } from './md-prioritizeupcdelete.component';

describe('MdPrioritizeupcdeleteComponent', () => {
  let component: MdPrioritizeupcdeleteComponent;
  let fixture: ComponentFixture<MdPrioritizeupcdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdPrioritizeupcdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdPrioritizeupcdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
