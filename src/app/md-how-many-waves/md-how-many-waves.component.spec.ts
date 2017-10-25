import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdHowManyWavesComponent } from './md-how-many-waves.component';

describe('MdHowManyWavesComponent', () => {
  let component: MdHowManyWavesComponent;
  let fixture: ComponentFixture<MdHowManyWavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdHowManyWavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdHowManyWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
