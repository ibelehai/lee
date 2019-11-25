import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAdEditFormComponent } from './facebook-ad-edit-form.component';

describe('FacebookAdEditFormComponent', () => {
  let component: FacebookAdEditFormComponent;
  let fixture: ComponentFixture<FacebookAdEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookAdEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookAdEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
