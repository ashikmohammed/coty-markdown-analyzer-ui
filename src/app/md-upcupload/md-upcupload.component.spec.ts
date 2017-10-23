import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdUpcuploadComponent } from './md-upcupload.component';

describe('MdUpcuploadComponent', () => {
  let component: MdUpcuploadComponent;
  let fixture: ComponentFixture<MdUpcuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdUpcuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdUpcuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
