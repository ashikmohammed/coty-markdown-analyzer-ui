import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaDatauploadComponent } from './mda-dataupload.component';

describe('MdaDatauploadComponent', () => {
  let component: MdaDatauploadComponent;
  let fixture: ComponentFixture<MdaDatauploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdaDatauploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdaDatauploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
