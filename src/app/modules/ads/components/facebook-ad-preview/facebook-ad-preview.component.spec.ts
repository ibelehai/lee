import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAdPreviewComponent } from './facebook-ad-preview.component';

describe('FacebookAdPreviewComponent', () => {
  let component: FacebookAdPreviewComponent;
  let fixture: ComponentFixture<FacebookAdPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookAdPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookAdPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
