import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTypeLabelComponent } from './ad-type-label.component';

describe('AdTypeComponent', () => {
  let component: AdTypeLabelComponent;
  let fixture: ComponentFixture<AdTypeLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTypeLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTypeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
