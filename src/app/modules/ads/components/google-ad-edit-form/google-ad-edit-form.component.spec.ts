import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdEditFormComponent } from './google-ad-edit-form.component';

describe('GoogleAdEditFormComponent', () => {
  let component: GoogleAdEditFormComponent;
  let fixture: ComponentFixture<GoogleAdEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAdEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAdEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
