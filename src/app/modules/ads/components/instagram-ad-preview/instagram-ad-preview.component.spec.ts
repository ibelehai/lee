import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramAdPreviewComponent } from './instagram-ad-preview.component';

describe('InstagramAdPreviewComponent', () => {
  let component: InstagramAdPreviewComponent;
  let fixture: ComponentFixture<InstagramAdPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramAdPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramAdPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
