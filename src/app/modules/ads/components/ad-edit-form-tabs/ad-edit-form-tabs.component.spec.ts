import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditFormTabsComponent } from './ad-edit-form-tabs.component';

describe('AdEditFormTabsComponent', () => {
  let component: AdEditFormTabsComponent;
  let fixture: ComponentFixture<AdEditFormTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdEditFormTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdEditFormTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
