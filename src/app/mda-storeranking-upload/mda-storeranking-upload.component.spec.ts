import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaStorerankingUploadComponent } from './mda-storeranking-upload.component';

describe('MdaStorerankingUploadComponent', () => {
  let component: MdaStorerankingUploadComponent;
  let fixture: ComponentFixture<MdaStorerankingUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdaStorerankingUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdaStorerankingUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
