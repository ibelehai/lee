import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditFormTabComponent } from './ad-edit-form-tab.component';

describe('AdEditFormTabComponent', () => {
  let component: AdEditFormTabComponent;
  let fixture: ComponentFixture<AdEditFormTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdEditFormTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdEditFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
