import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdPreviewComponent } from './google-ad-preview.component';

describe('GoogleAdPreviewComponent', () => {
  let component: GoogleAdPreviewComponent;
  let fixture: ComponentFixture<GoogleAdPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAdPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAdPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
