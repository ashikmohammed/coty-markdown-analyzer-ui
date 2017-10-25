import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdMarkdownDetailComponent } from './md-markdown-detail.component';

describe('MdMarkdownDetailComponent', () => {
  let component: MdMarkdownDetailComponent;
  let fixture: ComponentFixture<MdMarkdownDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdMarkdownDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdMarkdownDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
