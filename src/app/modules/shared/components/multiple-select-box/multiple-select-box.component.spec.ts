import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectBoxComponent } from './multiple-select-box.component';

describe('MultipleSelectBoxComponent', () => {
  let component: MultipleSelectBoxComponent;
  let fixture: ComponentFixture<MultipleSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
