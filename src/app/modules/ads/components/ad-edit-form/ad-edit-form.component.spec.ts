import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditFormComponent } from './ad-edit-form.component';

describe('AdEditFormComponent', () => {
  let component: AdEditFormComponent;
  let fixture: ComponentFixture<AdEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
