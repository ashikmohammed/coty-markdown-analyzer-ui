import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdWhatYouNeedComponent } from './md-what-you-need.component';

describe('MdWhatYouNeedComponent', () => {
  let component: MdWhatYouNeedComponent;
  let fixture: ComponentFixture<MdWhatYouNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdWhatYouNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdWhatYouNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
