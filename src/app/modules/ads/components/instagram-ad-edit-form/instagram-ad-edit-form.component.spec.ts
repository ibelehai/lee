import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramAdEditFormComponent } from './instagram-ad-edit-form.component';

describe('InstagramAdEditFormComponent', () => {
  let component: InstagramAdEditFormComponent;
  let fixture: ComponentFixture<InstagramAdEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramAdEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramAdEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
