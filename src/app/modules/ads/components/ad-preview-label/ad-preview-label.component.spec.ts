import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreviewLabelComponent } from './ad-preview-label.component';

describe('AdPreviewLabelComponent', () => {
  let component: AdPreviewLabelComponent;
  let fixture: ComponentFixture<AdPreviewLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPreviewLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreviewLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
